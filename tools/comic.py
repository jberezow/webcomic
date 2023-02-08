import json

class Comic:
  def __init__(self, comic_path, json_path):
    self.comic_path = comic_path
    self.json_path = json_path
    self.title = ''
    self.data = ''
  
  def input_comic_info(self):
    self.title = input('Title: ')
    self.date = input('Date: ')
  
  def load_comic(self):
    json_path = self.json_path
    with open(self.json_path, 'r') as f:
      comic_dict = json.load(f)
    self.__dict__ = comic_dict
    self.json_path = json_path
  
  def update_path(self, new_path):
    self.comic_path = new_path
    with open(self.json_path, 'w') as f:
      json.dump(self.__dict__, f)