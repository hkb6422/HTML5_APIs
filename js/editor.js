	
    //Invoke editor and set mode and theme
    editor = ace.edit("editor");
    editor.$blockScrolling = Infinity;
    editor.setTheme("ace/theme/monokai");
    editor.getSession().setMode("ace/mode/html");

    editor2 = ace.edit("editor2");
    editor2.$blockScrolling = Infinity;
    editor2.setTheme("ace/theme/monokai");
    editor2.getSession().setMode("ace/mode/css");

    editor3 = ace.edit("editor3");
    editor2.$blockScrolling = Infinity;
    editor3.setTheme("ace/theme/monokai");
    editor3.getSession().setMode("ace/mode/javascript");

    //Get values from editors and display results within iframe
    function update() {

    var iframe = document.getElementById('frame');
    
    ace = editor.getValue();
    ace2 = editor2.getValue();
    ace3 = editor3.getValue();

    //Call save function to store code in session storage
    Save();

    htmlElement = ace.replace(/<html>/g, "");
    htmlElement2 = htmlElement.replace(/<\/html>/g,""); 

    htmlElement3 = "\<html\>" + htmlElement2 + "\</html\>";
    styleElement = "\<style type='text/css'\>" + ace2 + "\</style\>";
    scriptElement = "\<script type='text/javascript'\>" + ace3 + "\</script\>";

    doc = iframe.contentWindow.document;
    doc.open();
    doc.write(htmlElement3);
    doc.write(styleElement);
    doc.write(scriptElement);
    doc.close();
    }


   //Convert code from editors into text 
    function write_html(){

    document.getElementById("code4").innerHTML = "";
    document.getElementById("code1").innerHTML = "";
    document.getElementById("code3").innerHTML = "";
    document.getElementById("code2").innerHTML = "";

    if (ace2.length > 0) {
    //Replace newline with break tag to display newlines within code
    var content6 = ace2.replace(/\n/g,"<br>");
    document.getElementById("code2").innerHTML = content6;
    }

    if(ace3.length > 0) {
    var content7 = ace3.replace(/\n/g,"<br>");    
    document.getElementById("code3").innerHTML = content7;
    }
  

    if(ace.length > 0){
    //Retrieve all content from head element
    var reg = /\<head[^>]*\>([^]*)\<\/head/;
    
    //Remove newline element

    var content = ace.match( reg )[1];
    var content = content.split("\n").slice(1).join("\n");

    //Special characters 
    var content1 = content.replace(/</g,"&lt;");
    var content2 = content1.replace(/>/g,"&gt;");
    var content3 = content2.replace(/\//g,"&#47;");
    var content4 = content3.replace(/\n/g,"<br>");

    document.getElementById("code4").innerHTML = content4;

    //Retrieve all content from body element
    var reg2 = /\<body[^>]*\>([^]*)\<\/body/;

    //Remove newline element 

    var bodycontent = ace.match( reg2 )[1];
    var bodycontent = bodycontent.split("\n").slice(1).join("\n");

    //Special characters
    var bodycontent1 = bodycontent.replace(/</g,"&lt;");
    var bodycontent2 = bodycontent1.replace(/>/g,"&gt;");
    var bodycontent3 = bodycontent2.replace(/\//g,"&#47;");
    var bodycontent4  =bodycontent3.replace(/\n/g,"<br>");

    document.getElementById("code1").innerHTML = bodycontent4;
    }
    }

    //Clear contents of editor and iframe
    function Clear() {   
    editor.setValue("");
    editor2.setValue("");
    editor3.setValue("");
    sessionStorage.clear();

    doc.open();
    doc.write("");
    doc.close();
    }

    
    //Save content from editor using key/value pairs
    function Save() {
    sessionStorage.setItem("html", ace);
    sessionStorage.setItem("css", ace2);
    sessionStorage.setItem("js", ace3);
    }


    
    //Function to call all functions to retrieve code saved for each editor
    function setCode(){
        setHTML();
        setCSS();
        setJS();
    //Run update function to update iframe
        update();
    } 
      
    
    //Functions to get the key/value pairs in storage for each editor
    function setCSS(){
         if (sessionStorage.getItem("css")) {
        editor2.setValue(sessionStorage.getItem("css"));
      } 
    }

    function setJS() {
        if (sessionStorage.getItem("js")) {
        editor3.setValue(sessionStorage.getItem("js"));
      } 

    }

    function setHTML() {
          if (sessionStorage.getItem("html")) {
        editor.setValue(sessionStorage.getItem("html"));
      } 

    }








