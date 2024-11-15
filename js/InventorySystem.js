"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var InventorySystem;
(function (InventorySystem) {
    var ITEM_INVENTORY_CLASS = "inventory-item";
    var ITEM_IMG_CLASS = "item-image";
    var ITEM_AMOUNT_CLASS = "item-amount";
    var MAX_STACK_AMOUNT = 64;
    var displayImage;
    var itemDescription;
    var itemRarity;
    var itemName;
    var itemTooltip;
    var itemsContainer;
    var tooltipContainer;
    var itemList = [];
    var selectedSlotIndex = null;
    var hoveredSlotIndex = null;
    var mouseX = 0;
    var mouseY = 0;
    document.addEventListener("mousemove", function (event) {
        mouseX = event.clientX;
        mouseY = event.clientY;
    });
    document.addEventListener("keydown", function (event) {
        if (event.key === "d" && hoveredSlotIndex !== null) {
            dropItem(hoveredSlotIndex);
        }
    });
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
        var rows = 5, columns = 7;
        var totalSlots = rows * columns;
        itemList = Array(totalSlots).fill(null);
        createInventoryGrid(rows, columns);
        populateInventoryItems(Math.floor(Math.random() * 35 + 1));
    }
    function createInventoryGrid(rows, columns) {
        if (!itemsContainer)
            return;
        itemsContainer.innerHTML = "";
        for (var i = 0; i < rows * columns; i++) {
            var itemSlot = document.createElement("div");
            itemSlot.classList.add(ITEM_INVENTORY_CLASS);
            itemSlot.id = "item-".concat(i + 1);
            var imageDiv = document.createElement("div");
            imageDiv.classList.add(ITEM_IMG_CLASS);
            var amountDiv = document.createElement("div");
            amountDiv.classList.add(ITEM_AMOUNT_CLASS);
            itemSlot.append(imageDiv, amountDiv);
            itemsContainer.appendChild(itemSlot);
        }
    }
    function populateInventoryItems(amount) {
        for (var i = 0; i < amount; i++) {
            var itemType = getRandomItemType();
            var itemDetails = InventorySystem.ItemDetails[itemType];
            var item = new InventorySystem.Item(itemDetails.type, itemDetails.rarity, itemDetails.image, itemDetails.name, itemDetails.singleInstance ? 1 : getRandomAmount(), itemDetails.tooltip, itemDetails.description, itemDetails.singleInstance || false);
            var emptySlotIndex = itemList.findIndex(function (slot) { return slot === null; });
            if (emptySlotIndex === -1) {
                console.warn("No empty slots available for new item.");
                break;
            }
            itemList[emptySlotIndex] = item;
            displayItemInSlot(emptySlotIndex, item);
        }
        updateItemDetails(itemList[0] || null);
    }
    function getRandomItemType() {
        var types = Object.keys(InventorySystem.ItemDetails);
        return types[Math.floor(Math.random() * types.length)];
    }
    function getRandomAmount() {
        return Math.floor(Math.random() * MAX_STACK_AMOUNT + 1);
    }
    function displayItemInSlot(index, item) {
        var itemSlot = itemsContainer === null || itemsContainer === void 0 ? void 0 : itemsContainer.children[index];
        var imageDiv = itemSlot.querySelector(".".concat(ITEM_IMG_CLASS));
        var amountDiv = itemSlot.querySelector(".".concat(ITEM_AMOUNT_CLASS));
        if (!item) {
            imageDiv.style.backgroundImage = 'none';
            amountDiv.textContent = '';
            amountDiv.style.visibility = 'hidden';
        }
        else {
            imageDiv.style.backgroundImage = "url('".concat(item.image, "')");
            amountDiv.textContent = item.singleInstance ? '' : "x".concat(item.amount);
            amountDiv.style.visibility = item.singleInstance ? 'hidden' : 'visible';
        }
        addHoverFunctionality(index);
        if (itemSlot.matches(':hover') && itemList[index]) {
            updateItemDetails(itemList[index]);
            tooltipContainer && (tooltipContainer.style.display = 'flex');
            positionTooltip(mouseX, mouseY);
        }
    }
    function updateItemDetails(currentItem) {
        if (!currentItem) {
            displayImage && (displayImage.style.backgroundImage = 'none');
            itemDescription && (itemDescription.textContent = "");
            itemRarity && (itemRarity.textContent = "");
            itemName && (itemName.textContent = "");
            itemTooltip && (itemTooltip.textContent = "");
            return;
        }
        displayImage && (displayImage.style.backgroundImage = "url('".concat(currentItem.image, "')"));
        itemDescription && (itemDescription.textContent = currentItem.description);
        itemRarity && (itemRarity.textContent = "".concat(currentItem.rarity, " ").concat(currentItem.type));
        itemName && (itemName.textContent = currentItem.name);
        itemTooltip && (itemTooltip.textContent = currentItem.tooltip);
    }
    function addHoverFunctionality(index) {
        var itemSlot = itemsContainer === null || itemsContainer === void 0 ? void 0 : itemsContainer.children[index];
        if (!itemSlot)
            return;
        itemSlot.addEventListener("mouseenter", function (event) {
            var currentItem = itemList[index];
            if (!currentItem) {
                tooltipContainer && (tooltipContainer.style.display = 'none');
                return;
            }
            hoveredSlotIndex = index;
            updateItemDetails(currentItem);
            positionTooltip(event.clientX, event.clientY);
        });
        itemSlot.addEventListener("mousemove", function (event) {
            var currentItem = itemList[index];
            if (currentItem && (tooltipContainer === null || tooltipContainer === void 0 ? void 0 : tooltipContainer.style.display) === 'flex') {
                positionTooltip(event.clientX, event.clientY);
            }
        });
        itemSlot.addEventListener("mouseleave", function () {
            tooltipContainer && (tooltipContainer.style.display = 'none');
            hoveredSlotIndex = null;
        });
    }
    function positionTooltip(x, y) {
        if (!tooltipContainer)
            return;
        var tooltipRect = tooltipContainer.getBoundingClientRect();
        var left = x + 20;
        var top = y + 20;
        if (left + tooltipRect.width > window.innerWidth)
            left = x - tooltipRect.width - 20;
        if (top + tooltipRect.height > window.innerHeight)
            top = y - tooltipRect.height - 20;
        tooltipContainer.style.display = 'flex';
        tooltipContainer.style.left = "".concat(left, "px");
        tooltipContainer.style.top = "".concat(top, "px");
    }
    function enableItemClickEvents() {
        Array.from(itemsContainer.children).forEach(function (slot, i) {
            slot.addEventListener("click", function () { return handleSlotClick(i); });
            slot.addEventListener("contextmenu", function (event) {
                event.preventDefault();
                splitItem(i);
            });
        });
    }
    function handleSlotClick(slotIndex) {
        var clickedItem = itemList[slotIndex];
        if (selectedSlotIndex === null && clickedItem) {
            selectedSlotIndex = slotIndex;
            highlightSlot(slotIndex);
        }
        else if (selectedSlotIndex === slotIndex) {
            clearHighlight();
            selectedSlotIndex = null;
        }
        else if (selectedSlotIndex !== null) {
            swapOrMergeItems(selectedSlotIndex, slotIndex);
            clearHighlight();
            selectedSlotIndex = null;
        }
    }
    function highlightSlot(index) {
        var slot = itemsContainer === null || itemsContainer === void 0 ? void 0 : itemsContainer.children[index];
        slot.classList.add("selected");
    }
    function clearHighlight() {
        Array.from(itemsContainer.children).forEach(function (slot) { return slot.classList.remove("selected"); });
    }
    function swapOrMergeItems(fromIndex, toIndex) {
        var fromItem = itemList[fromIndex];
        var toItem = itemList[toIndex];
        if (fromItem && toItem && fromItem.name === toItem.name && !fromItem.singleInstance) {
            var totalAmount = fromItem.amount + toItem.amount;
            if (totalAmount <= MAX_STACK_AMOUNT) {
                itemList[toIndex] = __assign(__assign({}, toItem), { amount: totalAmount });
                itemList[fromIndex] = null;
            }
            else {
                itemList[toIndex] = __assign(__assign({}, toItem), { amount: MAX_STACK_AMOUNT });
                itemList[fromIndex] = __assign(__assign({}, fromItem), { amount: totalAmount - MAX_STACK_AMOUNT });
            }
        }
        else {
            itemList[fromIndex] = toItem;
            itemList[toIndex] = fromItem;
        }
        displayItemInSlot(fromIndex, itemList[fromIndex]);
        displayItemInSlot(toIndex, itemList[toIndex]);
        updateItemDetails(itemList[toIndex] || null);
    }
    function splitItem(index) {
        var itemToSplit = itemList[index];
        if (!itemToSplit || itemToSplit.singleInstance || itemToSplit.amount <= 1) {
            return;
        }
        var emptySlotIndex = itemList.findIndex(function (item) { return item === null || item === undefined; });
        if (emptySlotIndex === -1) {
            console.warn("No empty slots available to split the item.");
            return;
        }
        var splitAmount = Math.floor(itemToSplit.amount / 2);
        itemToSplit.amount -= splitAmount;
        var splitItem = __assign(__assign({}, itemToSplit), { amount: splitAmount });
        itemList[emptySlotIndex] = splitItem;
        displayItemInSlot(index, itemToSplit);
        displayItemInSlot(emptySlotIndex, splitItem);
        updateItemDetails(itemList[index]);
        updateItemDetails(itemList[emptySlotIndex]);
    }
    function dropItem(index) {
        var itemToDrop = itemList[index];
        if (!itemToDrop)
            return;
        if (selectedSlotIndex === index) {
            return;
        }
        tooltipContainer && (tooltipContainer.style.display = 'none');
        hoveredSlotIndex = null;
        itemList[index] = null;
        displayItemInSlot(index, null);
        updateItemDetails(null);
    }
})(InventorySystem || (InventorySystem = {}));
