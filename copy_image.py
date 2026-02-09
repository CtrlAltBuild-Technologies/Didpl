import shutil
import os

source = "/Users/drashti/.gemini/antigravity/brain/dfd7094c-2ced-467d-b57f-ee7431d78442/dholera_hero_gen_1770616559038.png"
dest = "/Users/drashti/Desktop/didpl/public/dholera_hero_gen.png"

print(f"Attempting to copy from {source} to {dest}")

if os.path.exists(source):
    try:
        shutil.copy2(source, dest)
        print(f"Successfully copied to {dest}")
    except Exception as e:
        print(f"Error copying file: {e}")
else:
    print(f"Source file not found: {source}")
