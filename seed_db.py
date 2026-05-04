import pymongo
from bson import ObjectId

# Connection to Local MongoDB
client = pymongo.MongoClient("mongodb://localhost:27017/")
db = client["botanical_db"]

def seed_data():
    print("🌱 Starting Botanical Database Seeding...")

    # 1. Clear existing data
    db["conditions"].delete_many({})
    db["ingredients"].delete_many({})
    db["formulations"].delete_many({})

    # 2. Seed Conditions
    conditions = [
        {"_id": ObjectId("663677777777777777777771"), "name": "Acne Breakout", "description": "Inflammation of the skin resulting in pimples.", "category": "skin"},
        {"_id": ObjectId("663677777777777777777772"), "name": "Oily Skin", "description": "Excess sebum production causing a shiny appearance.", "category": "skin"},
        {"_id": ObjectId("663677777777777777777773"), "name": "Severe Dandruff", "description": "Excessive shedding of dead skin from the scalp.", "category": "hair"},
        {"_id": ObjectId("663677777777777777777774"), "name": "Dry Scalp", "description": "Lack of moisture in the scalp skin causing itching.", "category": "hair"}
    ]
    db["conditions"].insert_many(conditions)
    print("✅ Conditions Seeded.")

    # 3. Seed Ingredients
    ingredients = [
        {"name": "Sandalwood", "properties": ["Anti-inflammatory", "Cooling"], "preparationMethod": "Grind into a fine paste with water or rose water."},
        {"name": "Multani Mitti", "properties": ["Oil absorbing", "Cleansing"], "preparationMethod": "Mix with water to form a smooth clay."},
        {"name": "Fenugreek", "properties": ["Anti-fungal", "Strengthening"], "preparationMethod": "Soak overnight and grind into a paste."}
    ]
    db["ingredients"].insert_many(ingredients)
    print("✅ Ingredients Seeded.")

    # 4. Seed Formulations
    formulations = [
        {
            "conditionId": str(ObjectId("663677777777777777777771")),
            "remedyTitle": "Sandalwood & Clay Mask",
            "ingredientsUsed": [
                {"ingredientName": "Sandalwood", "exactMeasurement": "1 Tablespoon"},
                {"ingredientName": "Multani Mitti", "exactMeasurement": "2 Tablespoons"}
            ],
            "stepByStepInstructions": [
                "Mix Sandalwood and Multani Mitti in a small bowl.",
                "Add rose water to form a thick paste.",
                "Apply to the affected areas and leave for 15 minutes.",
                "Rinse with lukewarm water."
            ]
        }
    ]
    db["formulations"].insert_many(formulations)
    print("✅ Formulations Seeded.")

    print("\n✨ Database 'botanical_db' is now ready in your MongoDB!")
    print("Connect to: mongodb://localhost:27017 and refresh your view.")

if __name__ == "__main__":
    seed_data()
