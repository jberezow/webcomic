import json
import argparse
import glob
import time

import matplotlib.pyplot as plt
import matplotlib.image as mpimg

from IPython import display

from comic import Comic


def main(source_folder: str, target_folder: str, force: bool) -> None:
  print(f'Creating metadata files for {source_folder} and saving to {target_folder}')

  # Get all the files in the source folder
  comics = glob.glob(f'{source_folder}\\*.png') + glob.glob(f'{source_folder}\\*.jpg')

  for comic in comics:
    comic_handle = comic.split("\\")[-1].split(".")[0]
    json_path = f'{target_folder}\\{comic_handle}.json'

    if not force and glob.glob(json_path):
      print(f'File {json_path} already exists. Skipping...')

      # TODO Workaround: Validate the JSON path in case OS differences
      comic_info = Comic(comic, json_path)
      comic_info.load_comic()
      comic_info.update_path(comic)
      continue
    else:
      print(f'Creating metadata file for {comic}...')
      comic_info = Comic(comic)

      plt.gca().clear()
      comic_image = mpimg.imread(comic)
      plt.imshow(comic_image)
      plt.show()
      display.display(plt.gcf())
      display.clear_output(wait=True)
      time.sleep(1.0)

      comic_info.input_comic_info()
      with open(json_path, 'w') as f:
        json.dump(comic_info.__dict__, f)

if __name__ == '__main__':
  parser = argparse.ArgumentParser()
  parser.add_argument('-s','--source_folder', type=str, default="src\\assets\\comics\\images", help='Folder to load metadata files from')
  parser.add_argument('-t','--target_folder', type=str, default="src\\assets\\comics\\metadata", help='Folder to save metadata files to')
  parser.add_argument('-f', '--force', action='store_true', help='Force overwrite of existing metadata files')
  
  args = parser.parse_args()
  source_folder = args.source_folder
  target_folder = args.target_folder
  force = args.force

  main(source_folder=source_folder, target_folder=target_folder, force=force)