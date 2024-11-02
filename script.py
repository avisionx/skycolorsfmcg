import os
from PIL import Image

def rename_and_convert_images(folder_path):
    # Ensure the folder exists
    if not os.path.isdir(folder_path):
        print("Invalid folder path")
        return
    
    # Get a sorted list of all JPEG files in the folder
    image_files = [f for f in os.listdir(folder_path) if f.lower().endswith(('.jpeg', '.jpg'))]
    image_files.sort()  # Sort to maintain order

    # Process each image file
    for i, filename in enumerate(image_files, start=1):
        # Define the full file path
        old_file_path = os.path.join(folder_path, filename)
        new_file_path = os.path.join(folder_path, f"{i}.webp")
        
        try:
            # Open the image, convert to WebP, and save with the new filename
            with Image.open(old_file_path) as img:
                img.convert("RGB").save(new_file_path, "webp")
            
            # Optionally, remove the old file after converting
            os.remove(old_file_path)
            print(f"Converted and renamed: {filename} -> {i}.webp")
        
        except Exception as e:
            print(f"Error processing {filename}: {e}")

# Usage
folder_path = "./public/products/personal-care"  # Replace with your folder path
rename_and_convert_images(folder_path)
