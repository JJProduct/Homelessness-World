import{b as s}from"./init-22028896.js";console.log("Script started successfully");let e;WA.onInit().then(()=>{console.log("Scripting API ready"),console.log("Player tags: ",WA.player.tags),WA.controls.disablePlayerProximityMeeting(),WA.room.area.onEnter("clock").subscribe(()=>{const r=new Date,a=r.getHours()+":"+r.getMinutes();e=WA.ui.openPopup("clockPopup","It's "+a,[])}),WA.room.area.onLeave("clock").subscribe(o),WA.room.area.onEnter("phrase01").subscribe(()=>{e=WA.ui.openPopup("phrase01Popup","Welcome to Jalan Journey!",[])}),WA.room.area.onLeave("phrase01").subscribe(o),WA.room.area.onEnter("phrase02").subscribe(()=>{e=WA.ui.openPopup("phrase02Popup","These are woka - characters in the game as well! Remember to interact with them and you might find something interesting!",[])}),WA.room.area.onLeave("phrase02").subscribe(o),WA.room.area.onEnter("phrase03").subscribe(()=>{e=WA.ui.openPopup("phrase03Popup","Look out for these green arrows! They are portals into the next rooms. Try to enter",[])}),WA.room.area.onLeave("phrase03").subscribe(o),WA.room.area.onEnter("phrase04").subscribe(()=>{e=WA.ui.openPopup("phrase04Popup","What to do when you are lost?",[])}),WA.room.area.onLeave("phrase04").subscribe(o),WA.room.area.onEnter("phrase05").subscribe(()=>{e=WA.ui.openPopup("phrase05Popup","If you ever find yourself experiencing some sort of glitch, just refresh your browser page and you'll find yourself at where you last left off!",[])}),WA.room.area.onLeave("phrase05").subscribe(o),WA.room.area.onEnter("phrase06").subscribe(()=>{e=WA.ui.openPopup("phrase06Popup","How are you? Auntie is happy!",[])}),WA.room.area.onLeave("phrase06").subscribe(o),WA.room.area.onEnter("phrase07").subscribe(()=>{e=WA.ui.openPopup("phrase07Popup","Please have a seat and start video meeting",[])}),WA.room.area.onLeave("phrase07").subscribe(o),WA.room.area.onEnter("phrase08").subscribe(()=>{e=WA.ui.openPopup("phrase08Popup","You can change the aspect ratio by zooming in and out using your mouse or trackpad!",[])}),WA.room.area.onLeave("phrase08").subscribe(o),WA.room.area.onEnter("phrase09").subscribe(()=>{e=WA.ui.openPopup("phrase09Popup","These blue arrows will guide you from one location to another!",[])}),WA.room.area.onLeave("phrase09").subscribe(o),WA.room.area.onEnter("phrase10").subscribe(()=>{e=WA.ui.openPopup("phrase10Popup","Lastly, do ask your facilitator for help if you require any assistance!",[])}),WA.room.area.onLeave("phrase10").subscribe(o),WA.room.area.onEnter("phrase11").subscribe(()=>{e=WA.ui.openPopup("phrase11Popup","Hi i'm Jason. Want to have a conversation?",[])}),WA.room.area.onLeave("phrase11").subscribe(o),s().then(()=>{console.log("Scripting API Extra ready")}).catch(r=>console.error(r))}).catch(r=>console.error(r));function o(){e!==void 0&&(e.close(),e=void 0)}
