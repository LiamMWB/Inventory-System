namespace InventorySystem {
    // Define enums for each item category based on asset types
    enum Accessory {
        Crown = "Crown",
        AmethystRing = "Amethyst Ring",
        DiamondRing = "Diamond Ring",
        EmeraldRing = "Emerald Ring",
        RubyRing = "Ruby Ring"
    }

    enum BuildingMaterial {
        FabricScrap = "Fabric Scrap",
        Rock = "Rock",
        Sand = "Sand",
        Stick = "Stick",
        EmptyBottle = "Empty Bottle"
    }

    enum Food {
        Apple = "Apple",
        Carrot = "Carrot",
        CookedSteak = "Cooked Steak",
        Fish = "Fish",
        Potato = "Potato",
        Seeds = "Seeds",
        RawSteak = "Raw Steak"
    }

    enum Weapon {
        Sword = "Sword",
        Shield = "Shield",
        Bow = "Bow"
    }

    enum Potion {
        HealthPotion = "Health Potion",
        ManaPotion = "Mana Potion",
        PoisonPotion = "Poison Potion",
        StrengthPotion = "Strength Potion"
    }

    enum Treasure {
        BronzeCoin = "Bronze Coin",
        SilverCoin = "Silver Coin",
        GoldCoin = "Gold Coin"
    }

    enum Equipment {
        EmptyBucket = "Empty Bucket",
        LavaBucket = "Lava Bucket",
        WaterBucket = "Water Bucket",
        Arrow = "Arrow",
        FishingRod = "Fishing Rod",
        Torch = "Torch"
    }

    enum Tool {
        Pickaxe = "Pickaxe",
        Shovel = "Shovel",
        Axe = "Axe"
    }

    // Define enum for each item rarity
    enum ItemRarities {
        Common = "Common",
        Rare = "Rare",
        UltraRare = "Ultra Rare"
    }

    // Define an interface for the structure of item details
    export interface ItemDetail {
        type: string;
        rarity: string;
        image: string;
        name: string;
        tooltip: string;
        description: string;
        singleInstance?: boolean;
    }

    // ItemType to include all types
    export type ItemType =
        | Accessory
        | BuildingMaterial
        | Food
        | Weapon
        | Potion
        | Treasure
        | Equipment
        | Tool;

    // Define details for each item type
    export const ItemDetails: Record<ItemType, ItemDetail> = {
        // Accessory Types
        [Accessory.Crown]: {
            type: "Accessory",
            rarity: ItemRarities.UltraRare,
            image: "assets/accessories/Crown.png",
            name: "Crown",
            tooltip: "Symbol of royalty and power",
            description: "A finely crafted crown adorned with precious gems, worn by royalty to signify their rule.",
            singleInstance: true
        },
        [Accessory.AmethystRing]: {
            type: "Accessory",
            rarity: ItemRarities.Rare,
            image: "assets/accessories/AmethystRing.png",
            name: "Amethyst Ring",
            tooltip: "Boosts magical abilities",
            description: "A ring embedded with a polished amethyst, enhancing the wearer's arcane powers.",
            singleInstance: true
        },
        [Accessory.DiamondRing]: {
            type: "Accessory",
            rarity: ItemRarities.UltraRare,
            image: "assets/accessories/DiamondRing.png",
            name: "Diamond Ring",
            tooltip: "A symbol of wealth and prestige",
            description: "An elegant ring featuring a flawless diamond, representing wealth and status.",
            singleInstance: true
        },
        [Accessory.EmeraldRing]: {
            type: "Accessory",
            rarity: ItemRarities.Rare,
            image: "assets/accessories/EmeraldRing.png",
            name: "Emerald Ring",
            tooltip: "Enhances resilience and strength",
            description: "A ring with a radiant emerald, known for bestowing physical endurance.",
            singleInstance: true
        },
        [Accessory.RubyRing]: {
            type: "Accessory",
            rarity: ItemRarities.Rare,
            image: "assets/accessories/RubyRing.png",
            name: "Ruby Ring",
            tooltip: "Protects the wearer",
            description: "A ruby-encrusted ring believed to guard the wearer against harm.",
            singleInstance: true
        },

        // Building Material Types
        [BuildingMaterial.FabricScrap]: {
            type: "Building Material",
            rarity: ItemRarities.Common,
            image: "assets/building_materials/FabricScrap.png",
            name: "Fabric Scrap",
            tooltip: "Useful for crafting repairs",
            description: "A small scrap of fabric, perfect for patching and crafting."
        },
        [BuildingMaterial.Rock]: {
            type: "Building Material",
            rarity: ItemRarities.Common,
            image: "assets/building_materials/Rock.png",
            name: "Rock",
            tooltip: "Basic building material",
            description: "A sturdy rock, suitable for construction or tool crafting."
        },
        [BuildingMaterial.Sand]: {
            type: "Building Material",
            rarity: ItemRarities.Common,
            image: "assets/building_materials/Sand.png",
            name: "Sand",
            tooltip: "Base material for glassmaking",
            description: "A pile of sand, useful in construction or crafting glass items."
        },
        [BuildingMaterial.Stick]: {
            type: "Building Material",
            rarity: ItemRarities.Common,
            image: "assets/building_materials/Stick.png",
            name: "Stick",
            tooltip: "Crafting and tool material",
            description: "A sturdy stick, usable as a base for crafting tools or weapons."
        },
        [BuildingMaterial.EmptyBottle]: {
            type: "Building Material",
            rarity: ItemRarities.Common,
            image: "assets/building_materials/EmptyPotion.png",
            name: "Empty Bottle",
            tooltip: "Can be filled with various substances",
            description: "An empty glass bottle, ready for crafting potions or holding liquids.",
            singleInstance: true
        },

        // Food Types
        [Food.Apple]: {
            type: "Food",
            rarity: ItemRarities.Common,
            image: "assets/food/Apple.png",
            name: "Apple",
            tooltip: "+4 Hunger",
            description: "A fresh apple that restores a small amount of hunger when eaten."
        },
        [Food.Carrot]: {
            type: "Food",
            rarity: ItemRarities.Common,
            image: "assets/food/Carrot.png",
            name: "Carrot",
            tooltip: "+3 Hunger",
            description: "A nutritious vegetable that replenishes hunger slightly."
        },
        [Food.CookedSteak]: {
            type: "Food",
            rarity: ItemRarities.Rare,
            image: "assets/food/CookedSteak.png",
            name: "Cooked Steak",
            tooltip: "+10 Hunger",
            description: "A deliciously cooked steak that significantly restores hunger."
        },
        [Food.Fish]: {
            type: "Food",
            rarity: ItemRarities.Common,
            image: "assets/food/Fish.png",
            name: "Fish",
            tooltip: "+6 Hunger",
            description: "A fresh fish, perfect for cooking or eating raw to satisfy hunger."
        },
        [Food.Potato]: {
            type: "Food",
            rarity: ItemRarities.Common,
            image: "assets/food/Potato.png",
            name: "Potato",
            tooltip: "+5 Hunger",
            description: "A starchy vegetable that fills hunger moderately."
        },
        [Food.Seeds]: {
            type: "Food",
            rarity: ItemRarities.Common,
            image: "assets/food/Seeds.png",
            name: "Seeds",
            tooltip: "+1 Hunger",
            description: "Basic seeds that can be eaten or planted."
        },
        [Food.RawSteak]: {
            type: "Food",
            rarity: ItemRarities.Common,
            image: "assets/food/Steak.png",
            name: "Raw Steak",
            tooltip: "+5 Hunger",
            description: "A raw cut of meat that can be cooked to restore more hunger."
        },

        // Weapon Types
        [Weapon.Sword]: {
            type: "Weapon",
            rarity: ItemRarities.Rare,
            image: "assets/weapons/Sword.png",
            name: "Sword",
            tooltip: "+5 Damage",
            description: "A sharp, reliable blade used for close combat.",
            singleInstance: true
        },
        [Weapon.Shield]: {
            type: "Weapon",
            rarity: ItemRarities.Rare,
            image: "assets/weapons/Shield.png",
            name: "Shield",
            tooltip: "Blocks attacks",
            description: "A sturdy shield for blocking enemy attacks.",
            singleInstance: true
        },
        [Weapon.Bow]: {
            type: "Weapon",
            rarity: ItemRarities.Common,
            image: "assets/weapons/Bow.png",
            name: "Bow",
            tooltip: "+4 Damage from a distance",
            description: "A ranged weapon that requires arrows.",
            singleInstance: true
        },

        // Potion Types
        [Potion.HealthPotion]: {
            type: "Potion",
            rarity: ItemRarities.UltraRare,
            image: "assets/potions/RedPotion.png",
            name: "Health Potion",
            tooltip: "Restores health",
            description: "A red potion that heals wounds and restores health.",
            singleInstance: true
        },
        [Potion.ManaPotion]: {
            type: "Potion",
            rarity: ItemRarities.UltraRare,
            image: "assets/potions/BluePotion.png",
            name: "Mana Potion",
            tooltip: "Restores mana",
            description: "A blue potion that replenishes magical energy.",
            singleInstance: true
        },
        [Potion.PoisonPotion]: {
            type: "Potion",
            rarity: ItemRarities.Rare,
            image: "assets/potions/GreenPotion.png",
            name: "Poison Potion",
            tooltip: "Causes poison damage",
            description: "A green potion that poisons the drinker, causing damage over time.",
            singleInstance: true
        },
        [Potion.StrengthPotion]: {
            type: "Potion",
            rarity: ItemRarities.Rare,
            image: "assets/potions/PurplePotion.png",
            name: "Strength Potion",
            tooltip: "+2 Attack Power",
            description: "A purple potion that boosts strength temporarily.",
            singleInstance: true
        },

        // Treasure Types
        [Treasure.BronzeCoin]: {
            type: "Treasure",
            rarity: ItemRarities.Common,
            image: "assets/miscellaneous/BronzeCoin.png",
            name: "Bronze Coin",
            tooltip: "A currency",
            description: "A basic coin made of bronze, used for transactions."
        },
        [Treasure.SilverCoin]: {
            type: "Treasure",
            rarity: ItemRarities.Rare,
            image: "assets/miscellaneous/SilverCoin.png",
            name: "Silver Coin",
            tooltip: "A currency of moderate value",
            description: "A coin made of silver, more valuable than bronze."
        },
        [Treasure.GoldCoin]: {
            type: "Treasure",
            rarity: ItemRarities.UltraRare,
            image: "assets/miscellaneous/GoldCoin.png",
            name: "Gold Coin",
            tooltip: "A currency of high value",
            description: "A valuable coin made of gold, rare and sought after."
        },

        // Equipment Types
        [Equipment.EmptyBucket]: {
            type: "Equipment",
            rarity: ItemRarities.Common,
            image: "assets/equipment/EmptyBucket.png",
            name: "Empty Bucket",
            tooltip: "Can be filled with liquids",
            description: "A metal bucket, useful for holding liquids.",
            singleInstance: true
        },
        [Equipment.LavaBucket]: {
            type: "Equipment",
            rarity: ItemRarities.Rare,
            image: "assets/equipment/LavaBucket.png",
            name: "Lava Bucket",
            tooltip: "Handle with care!",
            description: "A bucket filled with lava, dangerously hot.",
            singleInstance: true
        },
        [Equipment.WaterBucket]: {
            type: "Equipment",
            rarity: ItemRarities.Common,
            image: "assets/equipment/WaterBucket.png",
            name: "Water Bucket",
            tooltip: "Contains water",
            description: "A bucket filled with water, useful for various tasks.",
            singleInstance: true
        },
        [Equipment.Arrow]: {
            type: "Equipment",
            rarity: ItemRarities.Common,
            image: "assets/equipment/Arrow.png",
            name: "Arrow",
            tooltip: "Ammunition for a bow",
            description: "A sharp arrow, perfect for use with a bow."
        },
        [Equipment.FishingRod]: {
            type: "Equipment",
            rarity: ItemRarities.Common,
            image: "assets/equipment/FishingRod.png",
            name: "Fishing Rod",
            tooltip: "Used for fishing",
            description: "A sturdy rod for catching fish.",
            singleInstance: true
        },
        [Equipment.Torch]: {
            type: "Equipment",
            rarity: ItemRarities.Rare,
            image: "assets/equipment/Torch.png",
            name: "Torch",
            tooltip: "Provides light",
            description: "A torch that can be used to illuminate dark areas."
        },

        // Tool Types
        [Tool.Pickaxe]: {
            type: "Tool",
            rarity: ItemRarities.Common,
            image: "assets/tools/Pickaxe.png",
            name: "Pickaxe",
            tooltip: "Used for mining",
            description: "A heavy tool designed for breaking rocks and minerals.",
            singleInstance: true
        },
        [Tool.Shovel]: {
            type: "Tool",
            rarity: ItemRarities.Common,
            image: "assets/tools/Shovel.png",
            name: "Shovel",
            tooltip: "Used for digging",
            description: "A tool for digging and scooping soil.",
            singleInstance: true
        },
        [Tool.Axe]: {
            type: "Tool",
            rarity: ItemRarities.Common,
            image: "assets/tools/Axe.png",
            name: "Axe",
            tooltip: "Used for chopping",
            description: "A sharp tool for cutting wood.",
            singleInstance: true
        }
    };

    // Inventory Item Class
    export class Item {
        constructor(
            public type: string,
            public rarity: string,
            public image: string,
            public name: string,
            public amount: number,
            public tooltip: string,
            public description: string,
            public singleInstance: boolean = false
        ) {}
    }
}