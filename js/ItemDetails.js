"use strict";
var InventorySystem;
(function (InventorySystem) {
    var _a;
    var Accessory;
    (function (Accessory) {
        Accessory["Crown"] = "Crown";
        Accessory["AmethystRing"] = "Amethyst Ring";
        Accessory["DiamondRing"] = "Diamond Ring";
        Accessory["EmeraldRing"] = "Emerald Ring";
        Accessory["RubyRing"] = "Ruby Ring";
    })(Accessory || (Accessory = {}));
    var BuildingMaterial;
    (function (BuildingMaterial) {
        BuildingMaterial["FabricScrap"] = "Fabric Scrap";
        BuildingMaterial["Rock"] = "Rock";
        BuildingMaterial["Sand"] = "Sand";
        BuildingMaterial["Stick"] = "Stick";
        BuildingMaterial["EmptyBottle"] = "Empty Bottle";
    })(BuildingMaterial || (BuildingMaterial = {}));
    var Food;
    (function (Food) {
        Food["Apple"] = "Apple";
        Food["Carrot"] = "Carrot";
        Food["CookedSteak"] = "Cooked Steak";
        Food["Fish"] = "Fish";
        Food["Potato"] = "Potato";
        Food["Seeds"] = "Seeds";
        Food["RawSteak"] = "Raw Steak";
    })(Food || (Food = {}));
    var Weapon;
    (function (Weapon) {
        Weapon["Sword"] = "Sword";
        Weapon["Shield"] = "Shield";
        Weapon["Bow"] = "Bow";
    })(Weapon || (Weapon = {}));
    var Potion;
    (function (Potion) {
        Potion["HealthPotion"] = "Health Potion";
        Potion["ManaPotion"] = "Mana Potion";
        Potion["PoisonPotion"] = "Poison Potion";
        Potion["StrengthPotion"] = "Strength Potion";
    })(Potion || (Potion = {}));
    var Treasure;
    (function (Treasure) {
        Treasure["BronzeCoin"] = "Bronze Coin";
        Treasure["SilverCoin"] = "Silver Coin";
        Treasure["GoldCoin"] = "Gold Coin";
    })(Treasure || (Treasure = {}));
    var Equipment;
    (function (Equipment) {
        Equipment["EmptyBucket"] = "Empty Bucket";
        Equipment["LavaBucket"] = "Lava Bucket";
        Equipment["WaterBucket"] = "Water Bucket";
        Equipment["Arrow"] = "Arrow";
        Equipment["FishingRod"] = "Fishing Rod";
        Equipment["Torch"] = "Torch";
    })(Equipment || (Equipment = {}));
    var Tool;
    (function (Tool) {
        Tool["Pickaxe"] = "Pickaxe";
        Tool["Shovel"] = "Shovel";
        Tool["Axe"] = "Axe";
    })(Tool || (Tool = {}));
    var ItemRarities;
    (function (ItemRarities) {
        ItemRarities["Common"] = "Common";
        ItemRarities["Rare"] = "Rare";
        ItemRarities["UltraRare"] = "Ultra Rare";
    })(ItemRarities || (ItemRarities = {}));
    InventorySystem.ItemDetails = (_a = {},
        _a[Accessory.Crown] = {
            type: "Accessory",
            rarity: ItemRarities.UltraRare,
            image: "assets/accessories/Crown.png",
            name: "Crown",
            tooltip: "Symbol of royalty and power",
            description: "A finely crafted crown adorned with precious gems, worn by royalty to signify their rule.",
            singleInstance: true
        },
        _a[Accessory.AmethystRing] = {
            type: "Accessory",
            rarity: ItemRarities.Rare,
            image: "assets/accessories/AmethystRing.png",
            name: "Amethyst Ring",
            tooltip: "Boosts magical abilities",
            description: "A ring embedded with a polished amethyst, enhancing the wearer's arcane powers.",
            singleInstance: true
        },
        _a[Accessory.DiamondRing] = {
            type: "Accessory",
            rarity: ItemRarities.UltraRare,
            image: "assets/accessories/DiamondRing.png",
            name: "Diamond Ring",
            tooltip: "A symbol of wealth and prestige",
            description: "An elegant ring featuring a flawless diamond, representing wealth and status.",
            singleInstance: true
        },
        _a[Accessory.EmeraldRing] = {
            type: "Accessory",
            rarity: ItemRarities.Rare,
            image: "assets/accessories/EmeraldRing.png",
            name: "Emerald Ring",
            tooltip: "Enhances resilience and strength",
            description: "A ring with a radiant emerald, known for bestowing physical endurance.",
            singleInstance: true
        },
        _a[Accessory.RubyRing] = {
            type: "Accessory",
            rarity: ItemRarities.Rare,
            image: "assets/accessories/RubyRing.png",
            name: "Ruby Ring",
            tooltip: "Protects the wearer",
            description: "A ruby-encrusted ring believed to guard the wearer against harm.",
            singleInstance: true
        },
        _a[BuildingMaterial.FabricScrap] = {
            type: "Building Material",
            rarity: ItemRarities.Common,
            image: "assets/building_materials/FabricScrap.png",
            name: "Fabric Scrap",
            tooltip: "Useful for crafting repairs",
            description: "A small scrap of fabric, perfect for patching and crafting."
        },
        _a[BuildingMaterial.Rock] = {
            type: "Building Material",
            rarity: ItemRarities.Common,
            image: "assets/building_materials/Rock.png",
            name: "Rock",
            tooltip: "Basic building material",
            description: "A sturdy rock, suitable for construction or tool crafting."
        },
        _a[BuildingMaterial.Sand] = {
            type: "Building Material",
            rarity: ItemRarities.Common,
            image: "assets/building_materials/Sand.png",
            name: "Sand",
            tooltip: "Base material for glassmaking",
            description: "A pile of sand, useful in construction or crafting glass items."
        },
        _a[BuildingMaterial.Stick] = {
            type: "Building Material",
            rarity: ItemRarities.Common,
            image: "assets/building_materials/Stick.png",
            name: "Stick",
            tooltip: "Crafting and tool material",
            description: "A sturdy stick, usable as a base for crafting tools or weapons."
        },
        _a[BuildingMaterial.EmptyBottle] = {
            type: "Building Material",
            rarity: ItemRarities.Common,
            image: "assets/building_materials/EmptyPotion.png",
            name: "Empty Bottle",
            tooltip: "Can be filled with various substances",
            description: "An empty glass bottle, ready for crafting potions or holding liquids.",
            singleInstance: true
        },
        _a[Food.Apple] = {
            type: "Food",
            rarity: ItemRarities.Common,
            image: "assets/food/Apple.png",
            name: "Apple",
            tooltip: "+4 Hunger",
            description: "A fresh apple that restores a small amount of hunger when eaten."
        },
        _a[Food.Carrot] = {
            type: "Food",
            rarity: ItemRarities.Common,
            image: "assets/food/Carrot.png",
            name: "Carrot",
            tooltip: "+3 Hunger",
            description: "A nutritious vegetable that replenishes hunger slightly."
        },
        _a[Food.CookedSteak] = {
            type: "Food",
            rarity: ItemRarities.Rare,
            image: "assets/food/CookedSteak.png",
            name: "Cooked Steak",
            tooltip: "+10 Hunger",
            description: "A deliciously cooked steak that significantly restores hunger."
        },
        _a[Food.Fish] = {
            type: "Food",
            rarity: ItemRarities.Common,
            image: "assets/food/Fish.png",
            name: "Fish",
            tooltip: "+6 Hunger",
            description: "A fresh fish, perfect for cooking or eating raw to satisfy hunger."
        },
        _a[Food.Potato] = {
            type: "Food",
            rarity: ItemRarities.Common,
            image: "assets/food/Potato.png",
            name: "Potato",
            tooltip: "+5 Hunger",
            description: "A starchy vegetable that fills hunger moderately."
        },
        _a[Food.Seeds] = {
            type: "Food",
            rarity: ItemRarities.Common,
            image: "assets/food/Seeds.png",
            name: "Seeds",
            tooltip: "+1 Hunger",
            description: "Basic seeds that can be eaten or planted."
        },
        _a[Food.RawSteak] = {
            type: "Food",
            rarity: ItemRarities.Common,
            image: "assets/food/Steak.png",
            name: "Raw Steak",
            tooltip: "+5 Hunger",
            description: "A raw cut of meat that can be cooked to restore more hunger."
        },
        _a[Weapon.Sword] = {
            type: "Weapon",
            rarity: ItemRarities.Rare,
            image: "assets/weapons/Sword.png",
            name: "Sword",
            tooltip: "+5 Damage",
            description: "A sharp, reliable blade used for close combat.",
            singleInstance: true
        },
        _a[Weapon.Shield] = {
            type: "Weapon",
            rarity: ItemRarities.Rare,
            image: "assets/weapons/Shield.png",
            name: "Shield",
            tooltip: "Blocks attacks",
            description: "A sturdy shield for blocking enemy attacks.",
            singleInstance: true
        },
        _a[Weapon.Bow] = {
            type: "Weapon",
            rarity: ItemRarities.Common,
            image: "assets/weapons/Bow.png",
            name: "Bow",
            tooltip: "+4 Damage from a distance",
            description: "A ranged weapon that requires arrows.",
            singleInstance: true
        },
        _a[Potion.HealthPotion] = {
            type: "Potion",
            rarity: ItemRarities.UltraRare,
            image: "assets/potions/RedPotion.png",
            name: "Health Potion",
            tooltip: "Restores health",
            description: "A red potion that heals wounds and restores health.",
            singleInstance: true
        },
        _a[Potion.ManaPotion] = {
            type: "Potion",
            rarity: ItemRarities.UltraRare,
            image: "assets/potions/BluePotion.png",
            name: "Mana Potion",
            tooltip: "Restores mana",
            description: "A blue potion that replenishes magical energy.",
            singleInstance: true
        },
        _a[Potion.PoisonPotion] = {
            type: "Potion",
            rarity: ItemRarities.Rare,
            image: "assets/potions/GreenPotion.png",
            name: "Poison Potion",
            tooltip: "Causes poison damage",
            description: "A green potion that poisons the drinker, causing damage over time.",
            singleInstance: true
        },
        _a[Potion.StrengthPotion] = {
            type: "Potion",
            rarity: ItemRarities.Rare,
            image: "assets/potions/PurplePotion.png",
            name: "Strength Potion",
            tooltip: "+2 Attack Power",
            description: "A purple potion that boosts strength temporarily.",
            singleInstance: true
        },
        _a[Treasure.BronzeCoin] = {
            type: "Treasure",
            rarity: ItemRarities.Common,
            image: "assets/miscellaneous/BronzeCoin.png",
            name: "Bronze Coin",
            tooltip: "A currency",
            description: "A basic coin made of bronze, used for transactions."
        },
        _a[Treasure.SilverCoin] = {
            type: "Treasure",
            rarity: ItemRarities.Rare,
            image: "assets/miscellaneous/SilverCoin.png",
            name: "Silver Coin",
            tooltip: "A currency of moderate value",
            description: "A coin made of silver, more valuable than bronze."
        },
        _a[Treasure.GoldCoin] = {
            type: "Treasure",
            rarity: ItemRarities.UltraRare,
            image: "assets/miscellaneous/GoldCoin.png",
            name: "Gold Coin",
            tooltip: "A currency of high value",
            description: "A valuable coin made of gold, rare and sought after."
        },
        _a[Equipment.EmptyBucket] = {
            type: "Equipment",
            rarity: ItemRarities.Common,
            image: "assets/equipment/EmptyBucket.png",
            name: "Empty Bucket",
            tooltip: "Can be filled with liquids",
            description: "A metal bucket, useful for holding liquids.",
            singleInstance: true
        },
        _a[Equipment.LavaBucket] = {
            type: "Equipment",
            rarity: ItemRarities.Rare,
            image: "assets/equipment/LavaBucket.png",
            name: "Lava Bucket",
            tooltip: "Handle with care!",
            description: "A bucket filled with lava, dangerously hot.",
            singleInstance: true
        },
        _a[Equipment.WaterBucket] = {
            type: "Equipment",
            rarity: ItemRarities.Common,
            image: "assets/equipment/WaterBucket.png",
            name: "Water Bucket",
            tooltip: "Contains water",
            description: "A bucket filled with water, useful for various tasks.",
            singleInstance: true
        },
        _a[Equipment.Arrow] = {
            type: "Equipment",
            rarity: ItemRarities.Common,
            image: "assets/equipment/Arrow.png",
            name: "Arrow",
            tooltip: "Ammunition for a bow",
            description: "A sharp arrow, perfect for use with a bow."
        },
        _a[Equipment.FishingRod] = {
            type: "Equipment",
            rarity: ItemRarities.Common,
            image: "assets/equipment/FishingRod.png",
            name: "Fishing Rod",
            tooltip: "Used for fishing",
            description: "A sturdy rod for catching fish.",
            singleInstance: true
        },
        _a[Equipment.Torch] = {
            type: "Equipment",
            rarity: ItemRarities.Rare,
            image: "assets/equipment/Torch.png",
            name: "Torch",
            tooltip: "Provides light",
            description: "A torch that can be used to illuminate dark areas."
        },
        _a[Tool.Pickaxe] = {
            type: "Tool",
            rarity: ItemRarities.Common,
            image: "assets/tools/Pickaxe.png",
            name: "Pickaxe",
            tooltip: "Used for mining",
            description: "A heavy tool designed for breaking rocks and minerals.",
            singleInstance: true
        },
        _a[Tool.Shovel] = {
            type: "Tool",
            rarity: ItemRarities.Common,
            image: "assets/tools/Shovel.png",
            name: "Shovel",
            tooltip: "Used for digging",
            description: "A tool for digging and scooping soil.",
            singleInstance: true
        },
        _a[Tool.Axe] = {
            type: "Tool",
            rarity: ItemRarities.Common,
            image: "assets/tools/Axe.png",
            name: "Axe",
            tooltip: "Used for chopping",
            description: "A sharp tool for cutting wood.",
            singleInstance: true
        },
        _a);
    var Item = (function () {
        function Item(type, rarity, image, name, amount, tooltip, description, singleInstance) {
            if (singleInstance === void 0) { singleInstance = false; }
            this.type = type;
            this.rarity = rarity;
            this.image = image;
            this.name = name;
            this.amount = amount;
            this.tooltip = tooltip;
            this.description = description;
            this.singleInstance = singleInstance;
        }
        return Item;
    }());
    InventorySystem.Item = Item;
})(InventorySystem || (InventorySystem = {}));
