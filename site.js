        $(document).ready(function(){
            
            var sc = 0;
            var pos = $("#tab_header").position().top;
            var pos_content2 = $("#content2").position().top;
            
           $("#footer").load("footer.html");  
               
            
            setInterval(function(){
             sc = $(document).scrollTop();
                if(sc >= pos)
                    {
                        $("#tab_header").addClass("tab_header");
                    }else{
                        $("#tab_header").removeClass("tab_header");
                    }
                
            },100);
           
        });
        
