from PIL import Image
import os, sys

path = "uk/"
dirs = os.listdir( path )

def resize():
    count = 1
    for item in dirs:
        if os.path.isfile(path+item):
            im = Image.open(path+item)
            f, e = os.path.splitext(path+item)
            imResize = im.resize((1024,768), Image.ANTIALIAS)
            imResize.save(str(count) + '.jpg', 'JPEG', quality=90)
            count += 1

resize()
