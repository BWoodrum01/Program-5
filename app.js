async function getData(selected_meal) {
    var response = await fetch('cit5students.json');   // this is a GET request

    if(response.ok) {
        var data = await response.json();

        // filter data array for the selected meal
        meal_items = data.filter( (item) => item.major == selected_meal );

       var templateText = document.getElementById('menuTemplate').innerHTML;
       var compiledTemplateText = Handlebars.compile(templateText);   // get and compile template code
       compiledHtml = compiledTemplateText({ rows: meal_items })      // apply data to template
       document.getElementById('menuTable').innerHTML = compiledHtml;
    }
    else {
       document.querySelector('#menuTable').innerHTML = "Oops!";
    }

}
