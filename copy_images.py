import os
import shutil

src_dir = "/Users/drashti/.gemini/antigravity/brain/f1812f06-6d27-4d32-a6dc-cd534010c082"
dst_dir = "/Users/drashti/Desktop/didpl/public/projects"

files = {
    "uploaded_media_2_1769406008015.png": "dholera-homes-3.png",
    "uploaded_media_1_1769406008015.png": "aero-town.png",
    "uploaded_media_0_1769406008015.png": "dholera-homes-2.png"
}

os.makedirs(dst_dir, exist_ok=True)

for src_name, dst_name in files.items():
    src_path = os.path.join(src_dir, src_name)
    dst_path = os.path.join(dst_dir, dst_name)
    try:
        if os.path.exists(src_path):
            shutil.copy2(src_path, dst_path)
            print(f"Copied {src_name} to {dst_name}")
        else:
            print(f"Source file not found: {src_path}")
    except Exception as e:
        print(f"Error copying {src_name}: {e}")
