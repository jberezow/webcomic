import glob
import json
import argparse

def main(key_to_delete: str, target_folder: str):
  print(f"Deleting key '{key_to_delete}' from all metadata files in {target_folder}\n")

  jsons = glob.glob(f'{target_folder}\\*.json')
  for j in jsons:
    with open(j, 'r') as f:
      content = json.load(f)
    
    # Delete a key
    if key_to_delete in content.keys():
      del content[key_to_delete]
    
      with open(j, 'w') as f:
        json.dump(content, f)
      
      print(f"Deleted key '{key_to_delete}' from {j}\n")

if __name__ == '__main__':
  parser = argparse.ArgumentParser()
  parser.add_argument('-k','--key', type=str, default='filepath', help='Key to remove from all metadata files')
  parser.add_argument('-t','--target_folder', type=str, default="src\\assets\\comics\\metadata", help='Folder to save metadata files to')
  
  args = parser.parse_args()
  key_to_delete = args.key
  target_folder = args.target_folder

  main(key_to_delete=key_to_delete, target_folder=target_folder)
