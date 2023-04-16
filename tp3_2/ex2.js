let mywindow = null;
            function openwindow() {
                mywindow = window.open('', 'mywindow', 'width=200,height=100,top=100,left=150');
                mywindow.document.write('this is <span style="color:blue">mywindow</span>');
            }
            function movewindow() {
                if (mywindow) {
                    mywindow.moveBy(100, 100);
                    mywindow.focus();
                }
            }
