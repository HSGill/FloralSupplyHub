//Call the function when your table renders adds expand & collapse to tables with grouping
$(document).on('knack-view-render.view_118', function (event, view , data) { 
    if(document.getElementsByClassName('advanced-search').length == 0){
       //as Serach section load two times, here we are checking if button added already then does not add again
        //$("<i class='itemFilters fa fa-plus' id='filterSection'></i>").insertBefore($("#view_57"));
    }
    
    //here we are checkin on loading of this page, if user click on Submit button to get record by filter then need to open filter section
   // console.log(isBuyerFilterItems);
    if(isBuyerFilterItems == "False"){
       itemFilterSectionDetails("visibility:hidden; position:absolute;");
    }
    
    //here we are changing text of search button
    var elementButton = document.getElementsByClassName('kn-button is-primary');
    elementButton[elementButton.length - 1].innerText = "Filter";
    
    //here we are adding collapse feature
    addGroupExpandCollapse(view);
    $('i#filterSection').unbind('click').click(function(e) { 
        e.preventDefault();                                         
        var formSection = $('.kn-search_form')[0];
        if(formSection.style.visibility == "" || formSection.style.visibility == "visible"){
           $(this)[0].className = "itemFilters fa fa-plus";
           itemFilterSectionDetails("visibility:hidden; position:absolute;");
        }else{
            $(this)[0].className = "itemFilters fa fa-minus";
            itemFilterSectionDetails("visibility:visible; position:inherit;");          
        }                                         
    });
    
    $('button.kn-button.is-primary').unbind('click').click(function(e) {
       //here we are trying to open Filter section after click on submit button
       console.log("Set_"+isBuyerFilterItems);
       isBuyerFilterItems = "True";
    });
  })
  
  function itemFilterSectionDetails(style){
      var formSection = $('.kn-search_form')[0];
      var headerSection = document.getElementsByClassName('view-header');
      formSection.style = style; 
      headerSection[headerSection.length - 1].style = style;
  }