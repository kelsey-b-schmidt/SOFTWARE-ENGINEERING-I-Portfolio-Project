import json

def read_text():
    text_file = open('files/button_receiver.txt', 'r')
    read_text = text_file.read()
    text_file.close()
    if read_text != "":
        print("Text read from 'button_receiver.txt':", read_text)
    return read_text



def write_text():
    data = {'employees': [{'name': 'John Doe', 'department': 'Marketing', 'place': 'Remote'}, {'name': 'Jane Doe', 'department': 'Software Engineering', 'place': 'Remote'}, {'name': 'Don Joe', 'department': 'Software Engineering', 'place': 'Office'}]}
    json_string = json.dumps(data)

    with open('files/testing.json', 'w') as file:
        file.write(json_string)
