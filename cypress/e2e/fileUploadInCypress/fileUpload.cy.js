/**
 * Use external library for file upload
 * 1. npm install --save-dev cypress-file-upload (run this in terminal)
 * 2. Then add this to your command.js file under support> import 'cypress-file-upload'
 * 3. Place the file you want to upload in the fixture folder here, it won't take from local drive
 * 4. 
 */

describe('test Suite: testing upload of file(s)', ()=>{



    //Documentation: 

    it('test: upload file', ()=>{

        cy.visit('https://ps.uci.edu/~franklin/doc/file_upload.html')
        //checks all the checkboxes having type as checkbox
        const myFixturePath = 'alpha.jpeg'
        cy.get('[type="file"]').attachFile(myFixturePath)
        
    })
})