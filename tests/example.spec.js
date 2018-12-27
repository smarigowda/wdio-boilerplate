describe('FF test', () => {
  beforeAll(() => {
    browser.url('http://www.youtube.com');
  });
  describe('setValue test', () => {
    it('should set the value of the input', () => {
      // browser.debug()
      // const input = browser.waitForShadowDomElement(['#search-input input']);
      const input = $('#search-input input')
      input.setValue('webcomponents');
      expect(input.getValue()).toEqual('webcomponents');
    });
  });
});
