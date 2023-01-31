class Comic:
  def __init__(self, filepath):
    self.filepath = filepath
  
  def input_comic_info(self):
    self.title = input('Title: ')
    self.date = input('Date: ')