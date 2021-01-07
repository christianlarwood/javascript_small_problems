let ItemManager = {
  items: [],

  create(itemName, category, quantity) {
    function isValidCategory(category) {
      if (category.split(' ').length > 1 || category.length < 5) {
        return false;
      }
      return true;
    }

    function isValidItemName(itemName) {
      if (itemName.match(/[a-z]/gi).join('').length < 5) {
        return false;
      }
      return true;
    }

    function isValidQuantity(quantity) {
      if (quantity === undefined) {
        return false;
      }
      return true;
    }

    function generateSku(itemName, category) {
      let cleanedItemName = itemName.match(/[a-z]/gi).join('');
      let shortItemName = cleanedItemName.slice(0, 3);
      let shortCategory = category.slice(0, 2);
      return (shortItemName + shortCategory).toUpperCase();
    }

    if ( isValidCategory(category) === false || isValidItemName(itemName)  === false || isValidQuantity(quantity) === false) {
      return false;
    } else {
      let obj = {
        sku: generateSku(itemName, category),
        itemName,
        category,
        quantity,
      };
      this.items.push(obj);
      return obj;
    };
  },

  getItem(sku) {
    return this.items.filter(obj => obj.sku === sku)[0];
  },

  update(sku, obj) {
    for (let i = 0; i < this.items.length; i += 1) {
      if (this.items[i].sku === sku) {
        Object.keys(obj).forEach(key => {
          this.items[i][key] = obj[key];
        });
      };
    };
  },

  delete(sku) {
    let indexToDelete = this.items.findIndex((obj) => obj.sku === sku);
    this.items.splice(indexToDelete, 1);
  },

  inStock() {
    console.log(this.items.filter(obj => obj.quantity > 0));
    return this.items.filter(obj => obj.quantity > 0);
  },

  itemsInCategory(category) {
    console.log(this.items.filter(obj => obj.category === category));
  },
}

let ReportManager = {
  init(obj) {
    this.items = obj;
  },

  createReporter(sku) {
    let item = this.items.getItem(sku);
    return {
      itemInfo() {
        Object.keys(item).forEach(key => {
          console.log(`${key}: ${item[key]}`);
        });
      },
    };
  },

  reportInStock() {
    let items = this.items.inStock();
    items.forEach(obj => console.log(obj.itemName));
  },
}

ItemManager.create('basket ball', 'sports', 0);           // valid item
// console.log(ItemManager.create('asd', 'sports', 0));
ItemManager.create('soccer ball', 'sports', 5);           // valid item
// console.log(ItemManager.create('football', 'sports'));
ItemManager.create('football', 'sports', 3);              // valid item
// console.log(ItemManager.create('kitchen pot', 'cooking items', 0));
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item

console.log(ItemManage.items);
// console.log(ItemManager.items);       
// // returns list with the 4 valid items
// console.log(ItemManager);
// ReportManager.init(ItemManager);
// ReportManager.reportInStock();
// // // logs soccer ball,football,kitchen pot

// ItemManager.update('SOCSP', { quantity: 0 });
// ItemManager.inStock();
// // // returns list with the item objects for football and kitchen pot
// ReportManager.reportInStock();
// // logs football,kitchen pot
// ItemManager.itemsInCategory('sports');
// returns list with the item objects for basket ball, soccer ball, and football
ItemManager.delete('SOCSP');
console.log(ItemManager.items);
// returns list with the remaining 3 valid items (soccer ball is removed from the list)

// const kitchenPotReporter = ReportManager.createReporter('KITCO');
// kitchenPotReporter.itemInfo();
// // logs
// // skuCode: KITCO
// // itemName: kitchen pot
// // category: cooking
// // quantity: 3

// ItemManager.update('KITCO', { quantity: 10 });
// kitchenPotReporter.itemInfo();
// // logs
// // skuCode: KITCO
// // itemName: kitchen pot
// // category: cooking
// // quantity: 10

// // console.log(ItemManager.items);     