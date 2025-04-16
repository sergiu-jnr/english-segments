import json
import os
import glob
from translate_text import (
    translate_text,
)  # Assuming this is the module with your function


def translate_json_files():
    # Get all JSON files in the current directory
    json_files = glob.glob("uk.json")

    # Process each JSON file
    for json_file in json_files:
        # Extract language code from filename (e.g., 'en' from 'en.json')
        target_lang = os.path.splitext(json_file)[0]

        # Skip English file since values are already in English
        if target_lang == "en":
            print(f"Skipping {json_file} as it's the source language file.")
            continue

        print(f"Processing {json_file} (target language: {target_lang})...")

        # Load the JSON file
        with open(json_file, "r", encoding="utf-8") as f:
            data = json.load(f)

        keys_to_process = [
            "audiosVolume",
            "recordingsVolume",
            "hideTranslation",
            "showTranslation",
            "stopRecording",
            "startRecording",
            "work",
            "home",
            "partner",
            "city",
        ]

        # Translate each value in the JSON
        translated_data = {}
        for key, value in data.items():
            # Skip keys that are not in the list
            if key not in keys_to_process:
                translated_data[key] = value
                continue
            # Translate the value from English to the target language
            translated_value = translate_text(target_lang, value)
            translated_data[key] = translated_value
            print(f"Translated key '{key}': '{value}' → '{translated_value}'")

        # Save the translated JSON back to the file
        with open(json_file, "w", encoding="utf-8") as f:
            json.dump(translated_data, f, ensure_ascii=False, indent=2)

        print(f"Updated {json_file} with translations.")


if __name__ == "__main__":
    translate_json_files()
