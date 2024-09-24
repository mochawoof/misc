import json
import requests
import os

if not os.path.exists("panels/"):
    os.makedirs("panels/")

src = requests.get("https://storage.googleapis.com/panels-api/data/20240916/media-1a-i-p~s")
src_json = json.loads(src.text)["data"]

l = len(src_json.keys())
i = 1
for key, value in src_json.items():
    i += 1
    if "dhd" in value.keys():
        image_url = value["dhd"]
        print(str(i) + "/" + str(l))
        image = requests.get(image_url)
        filename = image_url[image_url.rindex("/") : image_url.rindex("?")]
        filename = filename.replace("<", "")
        filename = filename.replace(">", "")
        filename = filename.replace(":", "")
        filename = filename.replace("\"", "")
        filename = filename.replace("/", "")
        filename = filename.replace("\\", "")
        filename = filename.replace("|", "")
        filename = filename.replace("?", "")
        filename = filename.replace("*", "")
        with open("panels/" + filename, "wb") as file:
            file.write(image.content)
