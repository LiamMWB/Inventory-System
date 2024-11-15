namespace InventorySystem {
    const ITEM_INVENTORY_CLASS = "inventory-item";
    const ITEM_IMG_CLASS = "item-image";
    const ITEM_AMOUNT_CLASS = "item-amount";
    const MAX_STACK_AMOUNT = 64;

    let displayImage: HTMLElement | null;
    let itemDescription: HTMLElement | null;
    let itemRarity: HTMLElement | null;
    let itemName: HTMLElement | null;
    let itemTooltip: HTMLElement | null;
    let itemsContainer: HTMLElement | null;
    let tooltipContainer: HTMLElement | null;

    // Inventory State
    let itemList: (Item | null)[] = [];
    let selectedSlotIndex: number | null = null;
    let hoveredSlotIndex: number | null = null;

    // Mouse Position State
    let mouseX = 0;
    let mouseY = 0;

    // Update mouse position for tooltip tracking
    document.addEventListener("mousemove", (event) => {
        mouseX = event.clientX;
        mouseY = event.clientY;
    });

    // Setup Key Events
    document.addEventListener("keydown", (event) => {
        if (event.key === "d" && hoveredSlotIndex !== null) {
            dropItem(hoveredSlotIndex);
        }
    });

    // Initialization
    document.addEventListener("DOMContentLoaded", init);

    function init() {
        displayImage = document.getElementById("displayImage");
        itemDescription = document.getElementById("itemDescription");
        itemRarity = document.getElementById("itemRarity");
        itemName = document.getElementById("itemName");
        itemTooltip = document.getElementById("itemTooltip");
        tooltipContainer = document.getElementById("tooltipContainer");
        itemsContainer = document.getElementById("itemsContainer");

        setUpInventorySettings();
        enableItemClickEvents();
    }

    function setUpInventorySettings() {
        const rows = 5, columns = 7; // Inventory grid dimensions
        const totalSlots = rows * columns;

        itemList = Array(totalSlots).fill(null);
        createInventoryGrid(rows, columns);
        populateInventoryItems(Math.floor(Math.random() * 35 + 1));
    }


    // Inventory Grid Setup
    function createInventoryGrid(rows: number, columns: number) {
        if (!itemsContainer) return;
        itemsContainer.innerHTML = "";

        for (let i = 0; i < rows * columns; i++) {
            const itemSlot = document.createElement("div");
            itemSlot.classList.add(ITEM_INVENTORY_CLASS);
            itemSlot.id = `item-${i + 1}`;

            const imageDiv = document.createElement("div");
            imageDiv.classList.add(ITEM_IMG_CLASS);

            const amountDiv = document.createElement("div");
            amountDiv.classList.add(ITEM_AMOUNT_CLASS);

            itemSlot.append(imageDiv, amountDiv);
            itemsContainer.appendChild(itemSlot);
        }
    }

    // Populate Inventory
    function populateInventoryItems(amount: number) {
        for (let i = 0; i < amount; i++) {
            const itemType = getRandomItemType();
            const itemDetails = ItemDetails[itemType];
            const item = new Item(
                itemDetails.type,
                itemDetails.rarity,
                itemDetails.image,
                itemDetails.name,
                itemDetails.singleInstance ? 1 : getRandomAmount(),
                itemDetails.tooltip,
                itemDetails.description,
                itemDetails.singleInstance || false
            );

            const emptySlotIndex = itemList.findIndex((slot) => slot === null);
            if (emptySlotIndex === -1) {
                console.warn("No empty slots available for new item.");
                break;
            }

            itemList[emptySlotIndex] = item;
            displayItemInSlot(emptySlotIndex, item);
        }

        // Ensure details for the first item are displayed
        updateItemDetails(itemList[0] || null);
    }

    // Helper Functions
    function getRandomItemType(): ItemType {
        const types = Object.keys(ItemDetails) as ItemType[];
        return types[Math.floor(Math.random() * types.length)];
    }

    function getRandomAmount(): number {
        return Math.floor(Math.random() * MAX_STACK_AMOUNT + 1);
    }

    // Display Functions
    function displayItemInSlot(index: number, item: Item | null) {
        const itemSlot = itemsContainer?.children[index] as HTMLElement;
        const imageDiv = itemSlot.querySelector(`.${ITEM_IMG_CLASS}`) as HTMLDivElement;
        const amountDiv = itemSlot.querySelector(`.${ITEM_AMOUNT_CLASS}`) as HTMLDivElement;

        // Update display based on item presence
        if (!item) {
            imageDiv.style.backgroundImage = 'none';
            amountDiv.textContent = '';
            amountDiv.style.visibility = 'hidden';
        } else {
            imageDiv.style.backgroundImage = `url('${item.image}')`;
            amountDiv.textContent = item.singleInstance ? '' : `x${item.amount}`;
            amountDiv.style.visibility = item.singleInstance ? 'hidden' : 'visible';
        }

        // Reapply hover functionality
        addHoverFunctionality(index);

        // Force tooltip to show at the current mouse position if the mouse is over this slot
        if (itemSlot.matches(':hover') && itemList[index]) {
            updateItemDetails(itemList[index]);
            tooltipContainer && (tooltipContainer.style.display = 'flex');
            positionTooltip(mouseX, mouseY);
        }
    }

    function updateItemDetails(currentItem: Item | null) {
        if (!currentItem) {
            displayImage && (displayImage.style.backgroundImage = 'none');
            itemDescription && (itemDescription.textContent = "");
            itemRarity && (itemRarity.textContent = "");
            itemName && (itemName.textContent = "");
            itemTooltip && (itemTooltip.textContent = "");
            return;
        }

        displayImage && (displayImage.style.backgroundImage = `url('${currentItem.image}')`);
        itemDescription && (itemDescription.textContent = currentItem.description);
        itemRarity && (itemRarity.textContent = `${currentItem.rarity} ${currentItem.type}`);
        itemName && (itemName.textContent = currentItem.name);
        itemTooltip && (itemTooltip.textContent = currentItem.tooltip);
    }

    // Hover Functionality
    function addHoverFunctionality(index: number) {
        const itemSlot = itemsContainer?.children[index] as HTMLElement;
        if (!itemSlot) return;

        itemSlot.addEventListener("mouseenter", (event) => {
            const currentItem = itemList[index];
            if (!currentItem) {
                tooltipContainer && (tooltipContainer.style.display = 'none');
                return;
            }

            hoveredSlotIndex = index;
            updateItemDetails(currentItem);
            positionTooltip(event.clientX, event.clientY);
        });

        itemSlot.addEventListener("mousemove", (event) => {
            const currentItem = itemList[index];
            if (currentItem && tooltipContainer?.style.display === 'flex') {
                positionTooltip(event.clientX, event.clientY);
            }
        });

        itemSlot.addEventListener("mouseleave", () => {
            tooltipContainer && (tooltipContainer.style.display = 'none');
            hoveredSlotIndex = null;
        });
    }

    function positionTooltip(x: number, y: number) {
        if (!tooltipContainer) return;

        const tooltipRect = tooltipContainer.getBoundingClientRect();
        let left = x + 20;
        let top = y + 20;

        if (left + tooltipRect.width > window.innerWidth) left = x - tooltipRect.width - 20;
        if (top + tooltipRect.height > window.innerHeight) top = y - tooltipRect.height - 20;

        tooltipContainer.style.display = 'flex';
        tooltipContainer.style.left = `${left}px`;
        tooltipContainer.style.top = `${top}px`;
    }

    // Click Events
    function enableItemClickEvents() {
        Array.from(itemsContainer!.children).forEach((slot, i) => {
            slot.addEventListener("click", () => handleSlotClick(i));
            slot.addEventListener("contextmenu", (event) => {
                event.preventDefault();
                splitItem(i);
            });
        });
    }

    function handleSlotClick(slotIndex: number) {
        const clickedItem = itemList[slotIndex];

        if (selectedSlotIndex === null && clickedItem) {
            selectedSlotIndex = slotIndex;
            highlightSlot(slotIndex);
        } else if (selectedSlotIndex === slotIndex) {
            clearHighlight();
            selectedSlotIndex = null;
        } else if (selectedSlotIndex !== null) {
            swapOrMergeItems(selectedSlotIndex, slotIndex);
            clearHighlight();
            selectedSlotIndex = null;
        }
    }

    // Slot Highlighting
    function highlightSlot(index: number) {
        const slot = itemsContainer?.children[index] as HTMLElement;
        slot.classList.add("selected");
    }

    function clearHighlight() {
        Array.from(itemsContainer!.children).forEach((slot) => slot.classList.remove("selected"));
    }

    // Inventory Operations
    function swapOrMergeItems(fromIndex: number, toIndex: number) {
        const fromItem = itemList[fromIndex];
        const toItem = itemList[toIndex];

        if (fromItem && toItem && fromItem.name === toItem.name && !fromItem.singleInstance) {
            const totalAmount = fromItem.amount + toItem.amount;

            if (totalAmount <= MAX_STACK_AMOUNT) {
                itemList[toIndex] = { ...toItem, amount: totalAmount };
                itemList[fromIndex] = null;
            } else {
                itemList[toIndex] = { ...toItem, amount: MAX_STACK_AMOUNT };
                itemList[fromIndex] = { ...fromItem, amount: totalAmount - MAX_STACK_AMOUNT };
            }
        } else {
            itemList[fromIndex] = toItem;
            itemList[toIndex] = fromItem;
        }

        displayItemInSlot(fromIndex, itemList[fromIndex]);
        displayItemInSlot(toIndex, itemList[toIndex]);
        updateItemDetails(itemList[toIndex] || null);
    }

    // Split Item Functionality
    function splitItem(index: number) {
        const itemToSplit = itemList[index];

        if (!itemToSplit || itemToSplit.singleInstance || itemToSplit.amount <= 1) {
            return; // Cannot split single-instance items or stacks with only one item
        }

        const emptySlotIndex = itemList.findIndex((item) => item === null || item === undefined);
        if (emptySlotIndex === -1) {
            console.warn("No empty slots available to split the item.");
            return;
        }

        const splitAmount = Math.floor(itemToSplit.amount / 2);
        itemToSplit.amount -= splitAmount;

        const splitItem = { ...itemToSplit, amount: splitAmount };
        itemList[emptySlotIndex] = splitItem;

        displayItemInSlot(index, itemToSplit);
        displayItemInSlot(emptySlotIndex, splitItem);
        updateItemDetails(itemList[index]);
        updateItemDetails(itemList[emptySlotIndex]);
    }

    // Drop Item Functionality
    function dropItem(index: number) {
        const itemToDrop = itemList[index];
        if (!itemToDrop) return;

        // Prevent clearing if the slot is currently selected
        if (selectedSlotIndex === index) {
            return;
        }

        tooltipContainer && (tooltipContainer.style.display = 'none');
        hoveredSlotIndex = null;

        itemList[index] = null;
        displayItemInSlot(index, null);
        updateItemDetails(null);
    }
}