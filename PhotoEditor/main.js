const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let img = new Image();
let fileName = '';

const downloadBtn = document.getElementById('download-btn');

const uploadFile = document.getElementById('upload-file');

const revertBtn = document.getElementById('revert-btn');

// FILTERS
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-btn')){
        if(e.target.classList.contains('brightness-add')){
            Caman('#canvas', img, function(){
                this.brightness(10).render();
            });
        }
        else if(e.target.classList.contains('brightness-remove')){
            Caman('#canvas', img, function(){
                this.brightness(-10).render();
            });

        }
        else if(e.target.classList.contains('contrast-add')){
            Caman('#canvas', img, function(){
                this.contrast(10).render();
            });
        }
        else if(e.target.classList.contains('contrast-remove')){
            Caman('#canvas', img, function(){
                this.contrast(-10).render();
            });
        }
        else if(e.target.classList.contains('saturation-add')){
            Caman('#canvas', img, function(){
                this.saturation(10).render();
            });
        }
        else if(e.target.classList.contains('saturation-remove')){
            Caman('#canvas', img, function(){
                this.saturation(-10).render();
            });
        }
        else if(e.target.classList.contains('vibrance-add')){
            Caman('#canvas', img, function(){
                this.vibrance(10).render();
            });
        }
        else if(e.target.classList.contains('vibrance-remove')){
            Caman('#canvas', img, function(){
                this.vibrance(-10).render();
            });
        }
        // FILTERS DONE
        else if(e.target.classList.contains('vintage-add')){
            Caman('#canvas', img, function(){
                this.vintage().render();
            });
        }
        else if(e.target.classList.contains('lomo-add')){
            Caman('#canvas', img, function(){
                this.lomo().render();
            });
        }
        else if(e.target.classList.contains('clarity-add')){
            Caman('#canvas', img, function(){
                this.clarity().render();
            });
        }
        else if(e.target.classList.contains('sincity-add')){
            Caman('#canvas', img, function(){
                this.sincity().render();
            });
        }
        else if(e.target.classList.contains('crossprocess-add')){
            Caman('#canvas', img, function(){
                this.crossprocess().render();
            });
        }
        else if(e.target.classList.contains('pinhole-add')){
            Caman('#canvas', img, function(){
                this.pinhole().render();
            });
        }
        else if(e.target.classList.contains('nostalgia-add')){
            Caman('#canvas', img, function(){
                this.nostalgia().render();
            });
        }
        else if(e.target.classList.contains('hermajestyadd')){
            Caman('#canvas', img, function(){
                this.herMajesty().render();
            });
        }

        //REVERT FILTERS
        revertBtn.addEventListener('click', (e) => {
            Caman('#canvas', img, function(){
                this.revert();
            })
        });
    }
});

// UPLOAD FILE
uploadFile.addEventListener('change', (e) => {
  const file = document.getElementById('upload-file').files[0];  

  const reader = new FileReader();

  if (file){
      //Set File Name
      fileName = file.name;
      //Read Date as a URL
      reader.readAsDataURL(file);
  }

  //Add Image to canvas
  reader.addEventListener('load', () => {
      //Create img
      img = new Image();
      //Set src
      img.src = reader.result;
      //On image load, add to canvas

      img.onload = function() {
          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img, 0, 0, img.width, img.height);
          canvas.removeAttribute('data-caman-id');
      }
  }, false);

});

//DOWNLOAD
downloadBtn.addEventListener('click', (e) => {
    //Get File extentstion
    const fileExtension = fileName.slice(-4);
    //Init new filename
    let newFileName;

    //Check image type
    if (fileExtension === '.jpg' || fileExtension === '.png'){
        newFileName = fileName.substring(0, fileName.length - 4) + '-edited.jpg';
    }

    //Call Download
    download(canvas, newFileName);
});

function download(canvas, filename){
    let e;
    //Create link
    const link = document.createElement('a');

    // Set Props
    link.download = fileName;
    link.href = canvas.toDataURL('image/jpeg', 0.8);

    //New mouseEvent
    e = new MouseEvent('click');
    //Dispatch event
    link.dispatchEvent(e);

}