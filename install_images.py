import os
import shutil

src_dir = "/Users/drashti/.gemini/antigravity/brain/66dc8136-44a4-4d9d-8227-7652e427027c"
dest_dir = "/Users/drashti/Desktop/didpl/public/highlights"

if not os.path.exists(dest_dir):
    os.makedirs(dest_dir)

files = {
    "location_highlight_1769344418334.png": "location.png",
    "transparency_highlight_1769344435799.png": "handshake.png",
    "legal_highlight_1769344453403.png": "legal.png",
    "experience_highlight_1769344473624.png": "experience.png",
    "customers_highlight_1769344491393.png": "customers.png",
    "resale_highlight_1769344508624.png": "resale.png"
}

for src, dest in files.items():
    src_path = os.path.join(src_dir, src)
    dest_path = os.path.join(dest_dir, dest)
    try:
        shutil.copy2(src_path, dest_path)
        print(f"Copied {dest}")
    except Exception as e:
        print(f"Error copying {src}: {e}")
