class PrintEditionItem {
  constructor(name, releaseDate, pageCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pageCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    this.state *= 1.5;
  }

  set state(value) {
    if (value < 0) {
      value = 0;
    }
    if (value > 100) {
      value = 100;
    }
    this._state = value;
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pageCount) {
    super(name, releaseDate, pageCount);    
    this.type = 'magazine';
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pageCount) {
    super(name, releaseDate, pageCount);    
    this.type = 'book';
    this.author = author;
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pageCount){
    super(author, name, releaseDate, pageCount);
    this.type = 'novel';
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pageCount){
    super(author, name, releaseDate, pageCount);
    this.type = 'fantastic';
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pageCount){
    super(author, name, releaseDate, pageCount);
    this.type = 'detective';
  }
}

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    for (let book of this.books) {
      if (book[type] === value) {
            return book;
      }      
    }
    return null;
  }

  giveBookByName(bookName) {
    for (let book of this.books) {
      if (book.name === bookName) {
            return this.books.splice(this.books.indexOf(book), 1)[0];
      }      
    }
    return null;
  }
}
/*
const MyLibrary = new Library("Моя библиотека");
redLibrary.addBook(new NovelBook("Герман Гессе", "Демиан", 1919, 224));
redLibrary.addBook(new FantasticBook("Джон Рональд Руэл Толкин", "Властелин колец", 1954, 752));
console.log(redLibrary.findBookBy("releaseDate", 1919));
const giveBook = redLibrary.giveBookByName("Властелин колец");
console.log("выдали книгу", giveBook);
giveBook.state = 30;
console.log("испортили книгу", giveBook.state);
giveBook.fix();
console.log("починили книгу", giveBook.state);
redLibrary.addBook(giveBook);
console.log(MyLibrary);
*/


class Student {
  constructor(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age; 
    this.subjects = {};
  }

  setSubject (subjectName) {
    if (subjectName in this.subjects) {      
        console.log('ТАКОЙ ПРЕДМЕТ УЖЕ СУЩЕСТВУЕТ!!!.');
        return null;        
      }
    
    this.subjects[subjectName] = [];
  }
  
  addMark (mark, subjectName) {
    if (!Number.isInteger(mark) || mark < 1 || mark > 5) {
      console.log('ОШИБКА!!! Оценка должна быть числом от 1 до 5');
      return null;
    }
    if (!(subjectName in this.subjects)) {      
      this.subjects[subjectName] = [];        
    }
  
    this.subjects[subjectName].push(mark);
  }
  
  addMarks (subjectName, ...marksArray) {
    if (marksArray.find(mark => !Number.isInteger(mark) || mark < 1 || mark > 5) !== undefined) {
      console.log('ОШИБКА!!! Оценка должна быть числом от 1 до 5');
      return null;
    }
    if (!(subjectName in this.subjects)) {      
      this.subjects[subjectName] = [];        
    }
  
    this.subjects[subjectName].push(...marksArray);    
  }
  
  getAverage () {
    let totalMarks = 0;
    let countMarks = 0;
    for (let subjectName in this.subjects) {
      totalMarks += this.subjects[subjectName].reduce((sum, item) => sum + item, 0);
      countMarks += this.subjects[subjectName].length;
    }
  
    return countMarks !== 0 ? totalMarks / countMarks  : 0;    
  }

  getAverageBySubject (subjectName) {
    if (!(subjectName in this.subjects)) {      
      console.log('Несуществующий предмет');
      return 0;        
    }

    return this.subjects[subjectName].reduce((sum, item) => sum + item, 0) / this.subjects[subjectName].length;
  }
  
  exclude (reason) {
    this.excluded = reason;
    
    if (this.hasOwnProperty('subjects')) {
      delete this.subjects;    
    }   
  }
}