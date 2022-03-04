let windowErrorSpy;

const DELAY = 1000;

describe('All tests', () => {
  let logText = '';
  let errText = '';

  afterEach(() => {
    cy.task('log', "LOG:\n" + logText);
    cy.task('log', "ERROR:\n" + errText);
  });

  it('succeed', () => {
    cy.visit(Cypress.env('BASE_URL') + '/tests/doh/runner.html?testUrl=../all', {
      onBeforeLoad (win) {
        cy.stub(win.console, 'log', (x) => {
          logText += x
        });
        cy.stub(win.console, 'error', (x) => {
          errText += x
        });
      },
    });
    cy.get('#play').click();
    cy.contains('tfoot tr.inProgress td', 'Result', {
      timeout: 10000
    });
  });
});
