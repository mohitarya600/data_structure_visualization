class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
    
    insert(data) {
      const newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
    
    insertAtIndex(data, index) {
      if (index === 0) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        return;
      }
      let current = this.head;
      let currentIndex = 0;
      while (current.next) {
        if (currentIndex + 1 === index) {
          const newNode = new Node(data);
          newNode.next = current.next;
          current.next = newNode;
          return;
        }
        current = current.next;
        currentIndex++;
      }
    }
    
    deleteByValue(data) {
      if (!this.head) {
        return;
      }
      if (this.head.data === data) {
        this.head = this.head.next;
        return;
      }
      let current = this.head;
      while (current.next) {
        if (current.next.data === data) {
          current.next = current.next.next;
          return;
        }
        current = current.next;
      }
    }
    
    deleteByIndex(index) {
      if (index === 0) {
        this.head = this.head.next;
        return;
      }
      let current = this.head;
      let currentIndex = 0;
      while (current.next) {
        if (currentIndex + 1 === index) {
          current.next = current.next.next;
          return;
        }
        current = current.next;
        currentIndex++;
      }
    }
    
    visualize() {
      const linkedListDiv = document.getElementById('linked-list');
      linkedListDiv.innerHTML = '';
      
      let current = this.head;
      let index = 0;
      while (current) {
        const nodeDiv = document.createElement('div');
        nodeDiv.className = 'node';
        nodeDiv.textContent = current.data;
        
        const indexDiv = document.createElement('div');
        indexDiv.className = 'index';
        indexDiv.textContent = index;
        
        linkedListDiv.appendChild(nodeDiv);
        linkedListDiv.appendChild(indexDiv);
        
        if (current.next) {
          const arrowDiv = document.createElement('div');
          arrowDiv.className = 'arrow';
          arrowDiv.textContent = '→';
          linkedListDiv.appendChild(arrowDiv);
        }
        
        current = current.next;
        index++;
      }
    }
  }
  
  const linkedList = new LinkedList();
  
  function generateRandomLinkedList() {
    linkedList.head = null;
    const randomLength = Math.floor(Math.random() * 6) + 3; // Random length between 3 and 8
    for (let i = 0; i < randomLength; i++) {
      linkedList.insert(Math.floor(Math.random() * 100));
    }
    linkedList.visualize();
  }
  
  function insertNode() {
    const inputValue = document.getElementById('insertValue').value;
    if (inputValue !== '') {
      linkedList.insert(Number(inputValue));
      linkedList.visualize();
      highlightNewlyAddedNode();
    }
  }
  
  function insertNodeAtIndex() {
    const inputValue = document.getElementById('insertValue').value;
    const inputIndex = document.getElementById('insertIndex').value;
    if (inputValue !== '' && inputIndex !== '') {
      linkedList.insertAtIndex(Number(inputValue), Number(inputIndex));
      linkedList.visualize();
      highlightNewlyAddedNode();
    }
  }
  
  function deleteNodeByValue() {
    const inputValue = document.getElementById('deleteValue').value;
    if (inputValue !== '') {
      linkedList.deleteByValue(Number(inputValue));
      linkedList.visualize();
    }
  }
  
  function deleteNodeByIndex() {
    const inputIndex = document.getElementById('deleteIndex').value;
    if (inputIndex !== '') {
      linkedList.deleteByIndex(Number(inputIndex));
      linkedList.visualize();
    }
  }
  
  function highlightNewlyAddedNode() {
    const nodeList = document.querySelectorAll('.node');
    if (nodeList.length > 0) {
      const newNode = nodeList[nodeList.length - 1];
      newNode.classList.add('newly-added', 'fade-in');
      setTimeout(() => {
        newNode.classList.remove('newly-added', 'fade-in');
      }, 1000);
    }
  }
  
  generateRandomLinkedList();