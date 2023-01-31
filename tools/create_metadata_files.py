import json
import argparse
import glob
import os

from comic import Comic

def main(source_folder: str, target_folder: str, force: bool) -> None:
  print(f'Creating metadata files for {source_folder} and saving to {target_folder}')

  # Get all the files in the source folder
  comics = glob.glob(f'{source_folder}/*.png') + glob.glob(f'{source_folder}/*.jpg')

  for comic in comics:
    comic_handle = comic.split("\\")[-1].split(".")[0]
    tentative_path = os.path.abspath(f'{target_folder}/{comic_handle}.json')

    if not force and glob.glob(tentative_path):
      print(f'File {tentative_path} already exists. Skipping...')
      continue
    else:
      print(f'Creating metadata file for {comic}...')
      comic_info = Comic(comic).input_comic_info()
      with open(tentative_path, 'w') as f:
        json.dump(comic_info, f)

if __name__ == '__main__':
  parser = argparse.ArgumentParser()
  parser.add_argument('-s','--source_folder', type=str, required=True, help='Folder to load metadata files from')
  parser.add_argument('-t','--target_folder', type=str, required=True, help='Folder to save metadata files to')
  parser.add_argument('-f', '--force', action='store_true', help='Force overwrite of existing metadata files')
  
  args = parser.parse_args()
  source_folder = args.source_folder
  target_folder = args.target_folder
  force = args.force

  main(source_folder=source_folder, target_folder=target_folder, force=force)