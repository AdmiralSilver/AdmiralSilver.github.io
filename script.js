
  document.addEventListener("DOMContentLoaded", function() {
    // Define a configuration object to store IDs and their respective URLs
    // Commented out grid 6 & 7 based on feedback from prosess. 

    // Grid 1 and 2 is working but i want them to zoom to fit the width
    // Can change the orientation of the word documents in SharePoint to better fit the screen, can also try to save as PDF to visualize the difference. 
    const gridContent = [
      { id: "grid1", url: "https://elkem.sharepoint.com/sites/T.RAN-TappingogEtterbehandling/_layouts/15/embed.aspx?UniqueId=66f03f62-e9c0-4649-9dd6-117247089f5d#view=FitH"
        //id: "grid1", url: "https://elkem.sharepoint.com/sites/T.RAN-TappingogEtterbehandling/_layouts/15/Doc.aspx?sourcedoc={11cd9663-4eac-4aec-b6ea-5c805e551377}&amp;action=embedview" 
        },
      { id: "grid2", url: "https://elkem.sharepoint.com/sites/T.RAN-TappingogEtterbehandling/_layouts/15/embed.aspx?UniqueId=6aad5651-48b0-4159-89b6-2ef42ea91144" },
      { id: "grid3", url: "img/prosess.PNG" },
      { id: "grid4", url: "https://planner.cloud.microsoft/webui/plan/5chRMHepAkaLt0GsUBkItZYAAQ_G/view/board?tid=80db3d04-4941-4992-9b01-cbe786893361" },
      { id: "grid5", url: "https://app.powerbi.com/reportEmbed?reportId=92780dd7-a4f8-4c35-a26a-a1255039429c&autoAuth=true&ctid=80db3d04-4941-4992-9b01-cbe786893361" },
      //{ id: "grid6", url: "https://app.infoskjermen.no/LAO261" },
      //{ id: "grid7", url: "img/øser.PNG" }
    ];
  
    // Embedding function with improved error handling
    function embedding(id, url) {
      const element = document.getElementById(id);
      if (!element) {
        console.warn(`Element with id ${id} not found.`);
        return;
      }
  
      if (!url) {
        console.warn(`URL for ${id} is missing.`);
        return;
      }
  
      // Embed content in iframe
      element.innerHTML = `<iframe src="${url}" frameborder="0" width="100%" height="100%" scrolling="no"></iframe>`;
    }
  
    // Loop through the configuration object and embed each item
    gridContent.forEach(item => embedding(item.id, item.url));
  });
  