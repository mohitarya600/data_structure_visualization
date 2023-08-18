class Queue {
    constructor() {
      this.items = {};
      this.frontIndex = 0;
      this.backIndex = 0;
    }
    enqueue(item) {
      this.items[this.backIndex] = item;
      this.backIndex++;
      return item + ' inserted';
    }
    dequeue() {
      const item = this.items[this.frontIndex];
      delete this.items[this.frontIndex];
      this.frontIndex++;
      return item;
    }
    peek() {
      return this.items[this.frontIndex];
    }
    get printQueue() {
      return this.items;
    }
  }

  const queue = new Queue();
  const queueContainer = document.getElementById('queue');

  function updateQueueVisual() {
    queueContainer.innerHTML = '';
    for (let i = queue.frontIndex; i < queue.backIndex; i++) {
      const item = document.createElement('div');
      item.className = 'queue-item';
      item.innerText = queue.items[i];
      if (i === queue.frontIndex) {
        item.classList.add('dequeued-item'); // Add class for dequeued item
      } else if (i === queue.backIndex - 1) {
        item.classList.add('enqueued-item'); // Add class for enqueued item
      }
      queueContainer.appendChild(item);
    }
  }

  function enqueue() {
    const newItem = Math.floor(Math.random() * 100); // Generate a random item
    const result = queue.enqueue(newItem);
    updateQueueVisual();
    console.log(result);
  }

  function dequeue() {
    if (queue.frontIndex === queue.backIndex) {
      console.log("Queue is empty");
      return;
    }
    const dequeuedItem = queue.dequeue();
    updateQueueVisual();
    console.log(dequeuedItem + " dequeued");
  }

  function manualEnqueue() {
    const manualInput = document.getElementById('manualInput');
    if (manualInput.value.trim() !== '') {
      const result = queue.enqueue(manualInput.value);
      updateQueueVisual();
      manualInput.value = '';
      console.log(result);
    }
  }

  updateQueueVisual(); // Initial visualization