---
id: quaddle_04
title: ""
sidebar_label: Adding Dimension
---

## Adding New Dimensions to Quaddle2.0

Quaddle2.0 is a powerful tool for creating and manipulating stimuli for cognitive science research. One of the key benefits of Quaddle2.0 is its ability to create complex, multi-dimensional stimuli. In this post, we'll explore how to add new dimensions to Quaddle2.0, including adding new features to existing dimensions and adding entirely new dimensions.

## Adding New Features to Existing Dimensions

Adding new features to existing dimensions in Quaddle2.0 is a relatively straightforward process. Here are the steps you'll need to follow:

1. Update Asset.txt: The Asset.txt file contains a list of all the assets that Quaddle2.0 can use. To add a new feature to an existing dimension, you'll need to update the Asset.txt file to include the new asset.

2. Update Python Script: Next, you'll need to update the Python script that corresponds to the dimension you're adding the new feature to. This script will be responsible for generating the new asset and integrating it into the dimension.

3. Update Correspondence `parser.py`: Finally, you'll need to update the Correspondence `parser.py` file to ensure that the new asset is properly linked to the correct dimension.

Here's an example of how to add a new body shape (UpFrustum) to Quaddle2.0:

1. Update Asset.txt: Add the new body shape to the Asset.txt file, making sure to include all the necessary information (e.g., file path, scale, rotation, etc.).

```text
Body: <..., UpFrustum>
```

2. Update Python Script: Update the Python script that corresponds to the body shape dimension to generate the new asset. This will likely involve importing the new asset and integrating it into the existing code.

```python
def createUpFrustum():
    bpy.ops.mesh.primitive_cone_add(vertices=32, radius1=6, radius2=2, depth=9, location=(0, 0, 0))
    frustum = bpy.context.active_object
    frustum.name = 'Body'
    return frustum, 'upfrustum'
```

3. Update Correspondence `parser.py`: Finally, update the Correspondence `parser.py` file to ensure that the new body shape is properly linked to the body shape dimension.

```python
def parse_body_shape(body_shape):
    if traits[0] == 0:
        body, body_type = createObject.createSphere()
    ...
    elif traits[0] == 6: # number of position in asset file
        body, body_type = createObject.createUpFrustum()
    
```

## Adding New Dimensions

Adding entirely new dimensions to Quaddle2.0 is a bit more involved than adding new features to existing dimensions, but it's still a relatively straightforward process. Here are the steps you'll need to follow:

1. Create New Asset: First, you'll need to create a new asset that corresponds to the new dimension you're adding. This could be a 3D model, an image, or any other type of asset that's relevant to your research.

2. Update Asset.txt: Next, you'll need to add the new asset to the Asset.txt file, making sure to include all the necessary information.

3. Create New Python Script: You'll need to create a new Python script that corresponds to the new dimension you're adding. This script will be responsible for generating the new asset and integrating it into the dimension.

4. Update Correspondence `parser.py`: Finally, you'll need to update the Correspondence `parser.py` file to ensure that the new asset is properly linked to the new dimension.

By following these steps, you can easily add new features to existing dimensions or add entirely new dimensions to Quaddle2.0. This flexibility and ease-of-use make Quaddle2.0 a powerful tool for cognitive science research.

For any question, please contact author for help!