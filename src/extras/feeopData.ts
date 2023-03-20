type ChapterDataType = {
    [title: string]: {
        subtitle?: string, 
        preunlockedUnits?: string[], 
        unlockedUnits?: string[],
        prereqChapter?: string,
        deploymentSlots: number,
        requiredUnits?: string[],
    }
}

export const paralogueData: ChapterDataType = {
    "Budding Talent": {
        deploymentSlots: 7,
        unlockedUnits: ["Jean"],
        requiredUnits: ["Alear"],
        prereqChapter: "Chapter 5"
    },
    "Mysterious Merchant": {
        deploymentSlots: 8,
        unlockedUnits: ["Anna"],
        requiredUnits: ["Alear"],
        prereqChapter: "Chapter 6"
    },
    "The Ancestor": {
        deploymentSlots: 8,
        requiredUnits: ["Alear"],
        prereqChapter: "Chapter 6"
    },
    "The Radiant Strategist": {
        deploymentSlots: 12,
        requiredUnits: ["Alear"],
        prereqChapter: "The Ancestor"
    },
    "The Brash General": {
        deploymentSlots: 8,
        requiredUnits: ["Alear"],
        prereqChapter: "The Ancestor"
    },
    "The Doting Sister": {
        deploymentSlots: 10,
        requiredUnits: ["Alear"],
        prereqChapter: "The Ancestor"
    },
    "The Shepherd Exalt": {
        deploymentSlots: 10,
        requiredUnits: ["Alear"],
        prereqChapter: "The Ancestor"
    },
    "The Lonely Heir": {
        deploymentSlots: 8,
        requiredUnits: ["Alear"],
        prereqChapter: "The Ancestor"
    }
}

export const mainStoryChapterData: ChapterDataType = {
    "Prologue": {
        subtitle: "The Emblems",
        preunlockedUnits: ["Alear"],
        deploymentSlots: 1,
        requiredUnits: ["Alear"],
    },
    "Chapter 1": {
        subtitle: "Awake at Last",
        preunlockedUnits: ["Vander"],
        deploymentSlots: 2,
        requiredUnits: ["Alear"],
    },
    "Chapter 2": {
        subtitle: "Queen Lumera",
        preunlockedUnits: ["Clanne", "Framme"],
        deploymentSlots: 4,
        requiredUnits: ["Alear"],
    },
    "Chapter 3": {
        subtitle: "Hostilities",
        unlockedUnits: ["Alfred", "Etie", "Boucheron"],
        deploymentSlots: 4,
        requiredUnits: ["Alear"],
    },
    "Chapter 4": {
        subtitle: "A Land in Bloom",
        unlockedUnits: ["Céline", "Louis", "Chloé"],
        deploymentSlots: 7,
        requiredUnits: ["Alear"],
    },
    "Chapter 5": {
        subtitle: "Retaking the Castle",
        deploymentSlots: 10,
        requiredUnits: ["Alear"],
    },
    "Chapter 6": {
        subtitle: "The Stolen Ring",
        unlockedUnits: ["Yunaka"],
        deploymentSlots: 10,
        requiredUnits: ["Alear"],
    },
    "Chapter 7": {
        subtitle: "Dark Emblem",
        unlockedUnits: ["Alcryst", "Citrinne", "Lapis"],
        deploymentSlots: 10,
        requiredUnits: ["Alear"],
    },
    "Chapter 8": {
        subtitle: "Kingdom of Might",
        unlockedUnits: ["Diamant", "Amber"],
        deploymentSlots: 10,
        requiredUnits: ["Alear"],
    },
    "Chapter 9": {
        subtitle: "A Clash of Forces",
        unlockedUnits: ["Jade"],
        deploymentSlots: 10,
        requiredUnits: ["Alear"],
    },
    "Chapter 10": {
        subtitle: "The Fell Dragon Sombron",
        deploymentSlots: 10,
        requiredUnits: ["Alear"],
    },
    "Chapter 11": {
        subtitle: "Retreat",
        deploymentSlots: 10,
        requiredUnits: ["Alear"],
        unlockedUnits: ["Ivy", "Zelkov", "Kagetsu"]
    },
    "Chapter 12": {
        subtitle: "The Sentinels",
        deploymentSlots: 8,
        requiredUnits: ["Alear"],
        unlockedUnits: ["Fogado", "Pandreo", "Bunet"]
    },
    "Chapter 13": {
        subtitle: "Heroes of the Oasis",
        deploymentSlots: 8,
        requiredUnits: ["Alear"],
        unlockedUnits: ["Timerra", "Merrin", "Panette"]
    },
    "Chapter 14": {
        subtitle: "The Battle for Solm",
        deploymentSlots: 12,
        requiredUnits: ["Alear"],
        unlockedUnits: ["Hortensia"]
    },
    "Chapter 15": {
        subtitle: "Dancer in the Ruins",
        deploymentSlots: 9,
        requiredUnits: ["Alear"],
        unlockedUnits: ["Seadall"]
    },
    "Chapter 16": {
        subtitle: "Seashore Travels",
        deploymentSlots: 10,
        requiredUnits: ["Alear"],
        unlockedUnits: ["Rosado", "Goldmary"]
    },
    "Chapter 17": {
        subtitle: "Serenity in Ruin",
        deploymentSlots: 12,
        requiredUnits: ["Alear"],
    },
    "Chapter 18": {
        subtitle: "The Cold Voyage",
        deploymentSlots: 12,
        requiredUnits: ["Alear"],
        unlockedUnits: ["Lindon"]
    },
    "Chapter 19": {
        subtitle: "The Dead Town",
        deploymentSlots: 13,
        requiredUnits: ["Alear"],
        unlockedUnits: ["Saphir"]
    },
    "Chapter 20": {
        subtitle: "The Kingless Castle",
        deploymentSlots: 11,
        requiredUnits: ["Alear"],
    },
    "Chapter 21": {
        subtitle: "The Return",
        deploymentSlots: 12,
        requiredUnits: ["Alear"],
        unlockedUnits: ["Mauvier"]
    },
    "Chapter 22": {
        subtitle: "The Fell & the Divine",
        deploymentSlots: 14,
        requiredUnits: ["Alear", "Veyle"],
        preunlockedUnits: ["Veyle"]
    },
    "Chapter 23": {
        subtitle: "The Four Hounds",
        deploymentSlots: 14,
        requiredUnits: ["Alear"],
    },
    "Chapter 24": {
        subtitle: "Recollections",
        deploymentSlots: 14,
        requiredUnits: ["Alear"],
    },
    "Chapter 25": {
        subtitle: "The Final Guardian",
        deploymentSlots: 14,
        requiredUnits: ["Alear"],
    },
    "Chapter 26": {
        subtitle: "The Last Engage",
        deploymentSlots: 14,
        requiredUnits: ["Alear"],
    }
};