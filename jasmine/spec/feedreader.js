
$(function() {

    describe('RSS Feeds', function() {
  
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('has a URL and is not empty', function(){
            allFeeds.forEach(function(feed){
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe('');
            });
        });

         /*Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('has a name and name not empty', function(){
            allFeeds.forEach(function(name){
                expect(name).toBeDefined();
                expect(name).not.toBe('');

            });

         });

    });


    /* Write a new test suite named "The menu" */

    describe('The menu', function() {

        /* Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('is hidden by default', function(){
            expect($('body').hasClass('menu-hidden')).toBe(true);

        });

         /* Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('changes visilbility when clicked', function(){

            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).not.toBe(true);

            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });


    });

    /* Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {

        /* Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

        beforeAll(function (done) {
            loadFeed(0, done);
        });
        
        it('has at least a single .entry element within the .feed container.', function(){
            var i = $('.feed .entry');
            expect(i.length).toBeGreaterThan(0);

        });
 
    }); 

    /* Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        var i;
        /* Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
         beforeAll(function(done){
            loadFeed(0, done);
            var i = $('.feed').html();
        });

        it('has content that actually changes', function(){      
            expect($('.feed').html).not.toEqual(i);

        }); 


    }); 
         
}());
