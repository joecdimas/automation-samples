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

})
