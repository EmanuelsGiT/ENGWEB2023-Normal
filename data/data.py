import json
import unidecode

def remove_accents(input_str):
    return unidecode.unidecode(input_str)

def process_json_file(file_path):
    with open(file_path, 'r') as file:
        data = json.load(file)

    processed_data = {}
    for key, value in data[0].items():
        new_key = remove_accents(key.replace(' ', '_'))
        if key == 'Id':
            new_key = '_id'
        processed_data[new_key] = value

    return processed_data

# Exemplo de utilização
file_path = 'plantas.json'
processed_data = process_json_file(file_path)

with open("plantas-alt.json", 'w') as output_file:
        json.dump(processed_data , output_file, indent=2)
