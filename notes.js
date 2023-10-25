const italicText = document.querySelector('.italic');
const boldText = document.querySelector('.bold');
const firstBatch = document.querySelector('#firstBatch')
const secondBatch = document.querySelector('#secondBatch')
const thirdBatch = document.querySelector('#thirdBatch')
const myNotes = document.querySelector('.folder1' )
secondBatch.style.display = 'none'
thirdBatch.style.display = 'none'
const deleteImages = document.querySelector('.deleteImages')
const addImages = document.querySelector('#addImages')
const deleteImages02 = document.querySelector('.deleteImages02')
const deleteImages03 = document.querySelector('.deleteImages03')
const addImages02 = document.querySelector('#addImages02')
const addImages03 = document.querySelector('#addImages03')
const notes = document.querySelector('#notes')
const notes02 = document.querySelector('#notes02')
const notes03 = document.querySelector('#notes03')
const readNotes = document.querySelector('#readNotes')
const saveNotes = document.querySelector('#saveNotes')
const saveNotes02 = document.querySelector('#saveNotes02')
const saveNotes03 = document.querySelector('#saveNotes03')
const savedNotesAfterCreated  = document.querySelector('.folder4')
const createNotes  = document.querySelector('.folder3')
const backToFormerPage  = document.querySelector('#formerPage01')
const backToFormerPageForSavedNotes  = document.querySelector('#formerPage01ForSavedNotes')
const backToFormerPageForSavedNotes02 = document.querySelector('#formerPage02ForSavedNotes')
const backToFormerPageForSavedNotes03 = document.querySelector('#formerPage03ForSavedNotes')
const backToFormerPage02  = document.querySelector('#formerPage02')
const backToFormerPage03  = document.querySelector('#formerPage03')
const thirdBatchForSavedNotes = document.querySelector('#thirdBatchForSavedNotes')
thirdBatchForSavedNotes.style.display = 'none'
readNotes.readOnly = true
const thirdBatchForSavedNotes02 = document.querySelector('#thirdBatchForSavedNotes02')
thirdBatchForSavedNotes02.style.display = 'none'
const thirdBatchForSavedNotes03 = document.querySelector('#thirdBatchForSavedNotes03')
thirdBatchForSavedNotes03.style.display = 'none'
readNotes.readOnly = true
readNotes02.readOnly = true
readNotes03.readOnly = true
const createNotePart2 = document.querySelector('#createNotePart2')
const thirdBatch02 = document.querySelector('#thirdBatch02')
thirdBatch02.style.display = 'none'
const createNotePart3 = document.querySelector('#createNotePart3')
const thirdBatch03 = document.querySelector('#thirdBatch03')
thirdBatch03.style.display = 'none'
const uploadButton = document.getElementById('uploadButton');
const fileInput = document.getElementById('fileInput');
const previewImage = document.getElementById('previewImage');
const fileInput02 = document.getElementById('fileInput02');
const previewImage02 = document.getElementById('previewImage02');
const uploadButton02 = document.getElementById('uploadButton02');
const fileInput03 = document.getElementById('fileInput03');
const previewImage03 = document.getElementById('previewImage03');
const uploadButton03 = document.getElementById('uploadButton03');
deleteImages.style.display = 'none'
deleteImages02.style.display = 'none'
deleteImages03.style.display = 'none'
const accessGallery = document.querySelector('#accessGallery');
const savedNotesPart2 = document.querySelector('#savedNotesPart2')
const savedNotesPart3 = document.querySelector('#savedNotesPart3')
const backToFolder = document.querySelector('#backToFolder')





// // ITALIC FUNCTION FOR BATCH 1
//  function italicFunction() {
//    firstBatch.classList.toggle('italicFont')
//  }

// italicText.addEventListener('click', italicFunction)

// // BOLD FUNCTION FOR BATCH 1
// function boldFunction() {
//     firstBatch.classList.toggle('boldFont')

//   }
 
//  boldText.addEventListener('click', boldFunction)

//  ITALIC FUNCTION FOR BATCH2
//  function italicFunction2() {
//   secondBatch.classList.toggle('italicFont')
// }

// italicText2.addEventListener('click', italicFunction2)


  //  BOLD FUNCTION FOR BATCH 2
// function boldFunction2() {
//    secondBatch.classList.toggle('boldFont')

//  }

// boldText2.addEventListener('click', boldFunction2)

// //  ITALIC FUNCTION FOR BATCH3
// function italicFunction3() {
//   thirdBatch.classList.toggle('italicFont')
//   notes.classList.toggle('italicFont')
// }

// italicText3.addEventListener('click', italicFunction3)


//   //  BOLD FUNCTION FOR BATCH 3
// function boldFunction3() {
//    thirdBatch.classList.toggle('boldFont')
//    notes.classList.toggle('boldFont')
// console.log(notes.value)


//  }

// boldText3.addEventListener('click', boldFunction3)

// ITALIC FUNCTION FOR BATCH 3 SAVED NOTES
// function italic3ForSavedNotesFunction() {
//   thirdBatchForSavedNotes.classList.toggle('italicFont')
//   readNotes.classList.toggle('italicFont')
// }

// italic3ForSavedNotes.addEventListener('click', italic3ForSavedNotesFunction)

// BOLD FUNCTION FOR BATCH 3 SAVED NOTES
// function bold3ForSavedNotesFunction() {
//   thirdBatchForSavedNotes.classList.toggle('boldFont')
//   readNotes.classList.toggle('boldFont')


// }

// bold3ForSavedNotes.addEventListener('click', bold3ForSavedNotesFunction)
  
    // ENTERING FOLDER 1 OF ALL FILES
function myNotesFunction() {
  firstBatch.style.display = 'none'
  secondBatch.style.display = 'inline'

  console.log('works');
}

 myNotes.addEventListener('click', myNotesFunction)




//  BRINGING IN BATCH 3 AND REMOVING BATCH 2
function createNoteFunction() {
secondBatch.style.display = 'none'
thirdBatch.style.display = 'inline'
}

createNotes.addEventListener('click', createNoteFunction)

  // CREATING A CLICK EVENT FOR SAVE NOTE ICON
function saveNotesFunction() {
 saveNotes.style.background = 'white';
readNotes.value = notes.value
notes.value = ''
console.log(notes.value)


}

saveNotes.addEventListener('click', saveNotesFunction)


  // SAVED NOTES AFTER CREATION FOR FOLDER 1
  function savedNotesAfterCreatedFunction() {
    secondBatch.style.display = 'none'
    thirdBatchForSavedNotes.style.display = 'inline'
console.log(notes.value)

// ADDING IMAGES TO THE SAVED NOTES AFTER CREATION FOR FOLDER
fileInput.addEventListener('change', function () {
  const selectedFile = fileInput.files[0];

  if (selectedFile) {
      const objectURL = URL.createObjectURL(selectedFile);
      previewImage.src = objectURL;
      previewImage.style.display = 'block';
  }
});

  }
  savedNotesAfterCreated.addEventListener('click', savedNotesAfterCreatedFunction)

  // BACK TO THE FORMER PAGE FOR CREATION NOTE 1
function backToFormerPageFunction() {
  secondBatch.style.display = 'inline'
  thirdBatch.style.display = 'none'
}

backToFormerPage.addEventListener('click', backToFormerPageFunction)

  // BACK TO THE FORMER PAGE FOR saved NOTE 1

function backToFormerPageForSavedNotesFunction() {
  secondBatch.style.display = 'inline'
  thirdBatchForSavedNotes.style.display = 'none'
}
backToFormerPageForSavedNotes.addEventListener('click', backToFormerPageForSavedNotesFunction)






// CREATING A CLICK EVENT TO ADD IMAGES TO THE NOTES 1
uploadButton.addEventListener('click', function () {
  fileInput.click();
});


fileInput.addEventListener('change', function () {
  const selectedFile = fileInput.files[0];

  if (selectedFile) {
      const objectURL = URL.createObjectURL(selectedFile);
      previewImage.src = objectURL;
      previewImage.style.display = 'block';
      deleteImages.style.display = 'inline'
      addImages.style.display = 'inline'

  }
});


// CREATING A FUNCTION TO DELETE THE EXISTING IMAGE FOR SAVED NOTE 1
function deleteImagesFunction() {
  addImages.style.display = 'none'
  deleteImages.style.display = 'none'
}

deleteImages.addEventListener('click', deleteImagesFunction)

// CREATING NOTES PART2
function createNotePart2Function() {
  secondBatch.style.display = 'none'
  thirdBatch02.style.display = 'inline'

}
createNotePart2.addEventListener('click', createNotePart2Function)

// CREATING NOTES PART3
function createNotePart3Function() {
  secondBatch.style.display = 'none'
  thirdBatch03.style.display = 'inline'

}
createNotePart3.addEventListener('click', createNotePart3Function)

  // BACK TO THE FORMER PAGE FOR CREATION NOTE 2
function backToFormerPage02Function() {
  secondBatch.style.display = 'inline'
  thirdBatch02.style.display = 'none'
}

backToFormerPage02.addEventListener('click', backToFormerPage02Function)


// BRINGING IN SAVED NOTES PART 2
function savedNotesPart2Function() {
  thirdBatchForSavedNotes02.style.display = 'inline'
  secondBatch.style.display = 'none'
}
savedNotesPart2.addEventListener('click', savedNotesPart2Function)
  // BACK TO THE FORMER PAGE FOR saved NOTE 2
  function backToFormerPageForSavedNotes02Function() {
    secondBatch.style.display = 'inline'
    thirdBatchForSavedNotes02.style.display = 'none'
  }
  
  backToFormerPageForSavedNotes02.addEventListener('click', backToFormerPageForSavedNotes02Function)


  
// CREATING A FUNCTION TO DELETE THE EXISTING IMAGE FOR SAVED NOTE 2
function deleteImages02Function() {
  addImages02.style.display = 'none'
  deleteImages02.style.display = 'none'
}
deleteImages02.addEventListener('click', deleteImages02Function)

// CREATING A CLICK EVENT TO ADD IMAGES TO THE NOTES 2
uploadButton02.addEventListener('click', function () {
  fileInput02.click();
});


fileInput02.addEventListener('change', function () {
  const selectedFile02 = fileInput02.files[0];

  if (selectedFile02) {
      const objectURL = URL.createObjectURL(selectedFile02);
      previewImage02.src = objectURL;
      previewImage02.style.display = 'block';
      deleteImages02.style.display = 'inline'
      addImages02.style.display = 'inline'
  }
});

// CREATING A FUNCTION TO SAVE NOTE AND SAVE TO SAVED NOTE FILE
function saveNotes02Function() {
  saveNotes02.style.background = 'white';
 readNotes02.value = notes02.value
 notes02.value = ''
 console.log(notes.value)
 
 
 }
 
 saveNotes02.addEventListener('click', saveNotes02Function)





  // BACK TO THE FORMER PAGE FOR CREATION NOTE 3

  function backToFormerPage03Function() {
    secondBatch.style.display = 'inline'
    thirdBatch03.style.display = 'none'
  }
  
  backToFormerPage03.addEventListener('click', backToFormerPage03Function)

  // BRINGING IN SAVED NOTES PART 3
function savedNotesPart3Function() {
  thirdBatchForSavedNotes03.style.display = 'inline'
  secondBatch.style.display = 'none'
}
savedNotesPart3.addEventListener('click', savedNotesPart3Function)

// CREATING A FUNCTION TO DELETE THE EXISTING IMAGE FOR SAVED NOTE 3
function deleteImages03Function() {
  addImages03.style.display = 'none'
  deleteImages03.style.display = 'none'
}
deleteImages03.addEventListener('click', deleteImages03Function)

// CREATING A FUNCTION TO SAVE NOTES TO SAVED FILES 
function saveNotes03Function() {
  saveNotes03.style.background = 'white';
 readNotes03.value = notes03.value
 notes03.value = ''
 console.log(notes.value)
 
 
 }
 
 saveNotes03.addEventListener('click', saveNotes03Function)

   // BACK TO THE FORMER PAGE FOR saved NOTE 2
   function backToFormerPageForSavedNotes03Function() {
    secondBatch.style.display = 'inline'
    thirdBatchForSavedNotes03.style.display = 'none'
  }
  
  backToFormerPageForSavedNotes03.addEventListener('click', backToFormerPageForSavedNotes03Function)

  uploadButton03.addEventListener('click', function () {
    fileInput03.click();
  });
  
    //  ADDING IMAGES TO SAVE NOTE PART 2
  fileInput03.addEventListener('change', function () {
    const selectedFile03 = fileInput03.files[0];
  
    if (selectedFile03) {
        const objectURL = URL.createObjectURL(selectedFile03);
        previewImage03.src = objectURL;
        previewImage03.style.display = 'block';
        deleteImages03.style.display = 'inline'
        addImages03.style.display = 'inline'
    }
  });

  backToFolder.addEventListener('click', function backToFolderFunction() {
    secondBatch.style.display = 'none'
    firstBatch.style.display = 'inline'

  })

    // CREATING DATE CREATE NOTE 1
  function actualDate() {
  const date1 = document.querySelector('.date')
    const now = new Date()
    const date = now.toDateString()
    const time = now.toLocaleTimeString()
    date1.textContent =   date + ' |  ' + time
  }
  setInterval(actualDate, 1000);

  actualDate()

    // CREATING DATE for SAVED NOTE 1

  function actualDateForSavedNote1() {
    const dateForSavedNote1 = document.querySelector('.dateForSavedNote1')
      const now = new Date()
      const date = now.toDateString()
      const time = now.toLocaleTimeString()
      dateForSavedNote1.textContent =   date + ' |  ' + time
    }
    setInterval(actualDateForSavedNote1, 1000);
  
    actualDateForSavedNote1()

        // CREATING DATE CREATE NOTE 2
  function actualDate02() {
    const date02 = document.querySelector('.date02')
      const now = new Date()
      const date = now.toDateString()
      const time = now.toLocaleTimeString()
      date02.textContent =   date + ' |  ' + time
    }
    setInterval(actualDate02, 1000);
  
    actualDate02()

        // CREATING DATE for SAVED NOTE 2

  function actualDateForSavedNote2() {
    const dateForSavedNote2 = document.querySelector('.dateForSavedNote2')
      const now = new Date()
      const date = now.toDateString()
      const time = now.toLocaleTimeString()
      dateForSavedNote2.textContent =   date + ' |  ' + time
    }
    setInterval(actualDateForSavedNote2, 1000);
  
    actualDateForSavedNote2()

            // CREATING DATE CREATE NOTE 3
  function actualDate03() {
    const date03 = document.querySelector('.date03')
      const now = new Date()
      const date = now.toDateString()
      const time = now.toLocaleTimeString()
      date03.textContent =   date + ' |  ' + time
    }
    setInterval(actualDate03, 1000);
  
    actualDate03()

    
        // CREATING DATE for SAVED NOTE 3
  function actualDateForSavedNote3() {
    const dateForSavedNote3 = document.querySelector('.dateForSavedNote3')
      const now = new Date()
      const date = now.toDateString()
      const time = now.toLocaleTimeString()
      dateForSavedNote3.textContent =   date + ' |  ' + time
    }
    setInterval(actualDateForSavedNote3, 1000);
  
    actualDateForSavedNote3()


                     // CREATING TODO LIST



  const folder2 = document.querySelector('.folder2')
  const todoList = document.querySelector('#todoList')
  const backToFolderForTodoList = document.querySelector('#backToFolderForTodoList')
  todoList.style.display = 'none'



      // BRINGING IN TODOLIST
  folder2.addEventListener('click', function folder2Function() {
   firstBatch.style.display = 'none'
   todoList.style.display = 'inline'
  })

  // ADDING A CLICK EVENT TO GO BACK TO FORMER PAGE
  backToFolderForTodoList.addEventListener('click', function backToFolderForTodoListFunction() {
    firstBatch.style.display = 'inline'
    todoList.style.display = 'none'
   })



   const ticks  = document.querySelectorAll('.tickPart2')
const tickPart02s = document.querySelectorAll('.tickPart02')

   ticks.forEach(function(tick, index) {
    tick.addEventListener('click', function(e) {
    tick.style.backgroundColor = 'black'
    tickPart02s[index].value = ''
    
    setTimeout(function() {
tick.style.backgroundColor ='transparent'
    }, 500)
    })
   })

                // SETTING FOR NOTE
const setting = document.querySelector('#setting')
const noteSetting = document.querySelector('#noteSetting')
const backToFolderForSetting = document.querySelector('#backToFolderForSetting')
noteSetting.style.display = 'none'

    //  BRINGING SETTING IN
setting.addEventListener('click', () => {
  firstBatch.style.display = 'none'
  noteSetting.style.display = 'inline'
}
)
    //  backToFolderForSetting ICON
    backToFolderForSetting.addEventListener('click',() => {
      firstBatch.style.display = 'inline'
      noteSetting.style.display = 'none'
    })

    // TICK HISTORY1
   const tickHistory1 = document.querySelector('#tickHistory1')
   const tickHistoryText1 = document.querySelector('#tickHistoryText1')

      //  TICK FUNCTION 1
   tickHistory1.addEventListener('click',() => {
    tickHistory1.style.backgroundColor = 'black'
    tickHistoryText1.innerHTML = 'All Saved Notes Cleared'
    readNotes.value = ''
    readNotes02.value = ''
    readNotes03.value = ''

    setTimeout(() =>{
      tickHistory1.style.backgroundColor = 'transparent'
      tickHistoryText1.innerHTML = 'Clear All Saved Notes'
    },1000)
   })

    // TICK HISTORY2
   const tickHistory2 = document.querySelector('#tickHistory2')
    const tickHistoryText2 = document.querySelector('#tickHistoryText2')

      //  TICK FUNCTION 2
    tickHistory2.addEventListener('click',() => {
      tickHistory2.style.backgroundColor = 'black'
      tickHistoryText2.innerHTML = 'All Saved Images Cleared'
      addImages.style.display = 'none'
      addImages02.style.display = 'none'
      addImages03.style.display = 'none'
       deleteImages.style.display = 'none'
       deleteImages02.style.display = 'none'
       deleteImages03.style.display = 'none'
      setTimeout(() =>{
        tickHistory2.style.backgroundColor = 'transparent'
        tickHistoryText2.innerHTML = 'Clear All Saved Images'
      },1000)
     })
    

          // ITALIC FONT
      const italicFont = document.querySelector('.italicFont')
      const boldFont1 = document.querySelector('.boldFont')
      const default1 = document.querySelector('.default')



      italicFont.addEventListener('click',() => {
        italicFont.style.backgroundColor = 'black'
        document.body.classList.add('italicFont')
        notes.classList.add('italicFont')
        notes02.classList.add('italicFont')
        notes03.classList.add('italicFont')
        readNotes.classList.add('italicFont')
        readNotes02.classList.add('italicFont')
        readNotes03.classList.add('italicFont')



        if(boldFont1.style.backgroundColor = 'black') {
          boldFont1.style.backgroundColor = 'transparent'
          document.body.classList.remove('boldFont')
          notes.classList.remove('boldFont')
          notes02.classList.remove('boldFont')
          notes03.classList.remove('boldFont')
          readNotes.classList.remove('boldFont')
          readNotes02.classList.remove('boldFont')
          readNotes03.classList.remove('boldFont')

        }
      })



      boldFont1.addEventListener('click',() => {
        boldFont1.style.backgroundColor = 'black'
        document.body.classList.add('boldFont')
        notes.classList.add('boldFont')
        notes02.classList.add('boldFont')
        notes03.classList.add('boldFont')
        readNotes.classList.add('boldFont')
        readNotes02.classList.add('boldFont')
        readNotes03.classList.add('boldFont')



        if(italicFont.style.backgroundColor = 'black') {
          italicFont.style.backgroundColor = 'transparent'
          document.body.classList.remove('italicFont')
          notes.classList.remove('italicFont')
          notes02.classList.remove('italicFont')
          notes03.classList.remove('italicFont')
          readNotes.classList.remove('italicFont')
          readNotes02.classList.remove('italicFont')
          readNotes03.classList.remove('italicFont')

        }
        
      })

      // DEFAULT 1

      default1.addEventListener('click', () => {
        default1.style.backgroundColor = 'black'


        if(italicFont.style.backgroundColor = 'black') {
          italicFont.style.backgroundColor = 'transparent'
          document.body.classList.remove('italicFont')
          notes.classList.remove('italicFont')
          notes02.classList.remove('italicFont')
          notes03.classList.remove('italicFont')
          readNotes.classList.remove('italicFont')
          readNotes02.classList.remove('italicFont')
          readNotes03.classList.remove('italicFont')
        }

        
        if(boldFont1.style.backgroundColor = 'black') {
          boldFont1.style.backgroundColor = 'transparent'
          document.body.classList.remove('boldFont')
          notes.classList.remove('boldFont')
          notes02.classList.remove('boldFont')
          notes03.classList.remove('boldFont')
          readNotes.classList.remove('boldFont')
          readNotes02.classList.remove('boldFont')
          readNotes03.classList.remove('boldFont')
        }
        setTimeout(() => {
        default1.style.backgroundColor = 'transparent'
        },1000)
      })
