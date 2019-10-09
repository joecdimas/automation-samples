context('Login to the Leafly Homepage',() => {

  before('Go to the SSO Homepage', () => {
    cy.visit('https://sso.leafly.com');
  });

  it('Login using credentials', ()=> {
    //username and password
    cy.get('input[name="login"]').type('joe.c.dimas+leafly@gmail.com');
    cy.get('input[name="password"]').type('Mypassword2{enter}');
    cy.screenshot();

  });

  //This is the menu item that ask you if you are 21 years or older.
  it('Click on the menu dropdown',  () => {
    if(cy.contains('button','yes').click()){
    }
    //Menu Item
    cy.get('button.block.relative.mr-md').click();
    //Strains Link
    cy.get('li.nav__strains').click();

  })
  it('Goes to the Northern Lights strain', ()=> {
    //this is theoretical:
    cy.get('[data-test-id="NorthernLights"]').click()
    cy.screenshot();

    /*we take a screenshot. This can ensure that we have the correct image and link. We could also do something like this: */
    
    cy.screenshot({ x: 20, y: 20, width: 400, height: 300 })
    
    /*which takes a screenshot of the strainpicture
    we could even make  sure that  the strains  are the right color or shapes:*/

    cy.get('.NortherLights').should('have.css', 'color', 'rgb(217,217,217)')

  })

})
