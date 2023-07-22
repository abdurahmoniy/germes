import logging
import os
import uuid

import requests
from requests.auth import HTTPBasicAuth


def play_mobile_send_sms(recipient: str, text: str):
    # This logic for https://playmobile.uz/ sms provider
    message_id = f"inmall {uuid.uuid4().node}"[:20]
    headers = {
        # "User-agent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36", # noqa
        "Content-Type": "application/json"
    }
    originator = "3700"
    payload = {
        "messages": [
            {
                "recipient": recipient,
                "message-id": message_id,
                "sms": {"originator": originator, "content": {"text": text}},
            }
        ]
    }

    try:
        response = requests.post(
            os.environ.get("PLAYMOBILE_BROKER_URL"),
            auth=HTTPBasicAuth(
                username=os.environ.get("PLAYMOBILE_BROKER_USERNAME"),
                password=os.environ.get("PLAYMOBILE_BROKER_PASSWORD"),
            ),
            json=payload,
            headers=headers,
        )
        return response
    except Exception as e:
        logging.exception(e)
