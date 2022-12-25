- Produktobjekt: benämning "product" i webbappen och "inventoryitem" i webbapiet.
- Produktbilderna och bilderna i Hero section är länkade från Hans API https://win22-webapi.azurewebsites.net/.


Tillförd funktionalitet:

- Antalet ratingstjärnor för varje produkt renderas i webbappen baserat på angivet ratingvärde i motsvarande produktobjekt i databasen.
- Hämtning av produktobjekt baserat på efterfrågat ratingvärde. 
- Vid hämtning av okategorieserat men bestämt antal produkter randomiseras vilka produktobjekt som hämtas.
- Related Products i Product Details view hämtar övriga produktobjekt ur databasen av samma kategori med aktuell produkt exkluderad (eftersom den annars skulle visas två gånger).



Kända buggar:

- Produktbilderna renderas inte i Chrome. Fungerar i Edge. 
- Route med artikelnummer som params fungerar inte från Related Products på Produkt Details view. Fungerar från Home view. 



För godkänt krävs följande:

	Din sida ska vara byggd med React.
		  "react": "^18.2.0" (examination-assignment-3-frontend/package.json)

	Din sida ska använda sig av TypeScript.
		  "typescript": "^4.9.3" (examination-assignment-3-frontend/package.json)		

	Din sida ska hämta produkter från ditt egna Web Api.
		  apiURL: http://localhost:5000/api/inventoryitems/ (examination-assignment-3-backend)

	Ditt Web Api ska vara byggt i Express JS.
		  "express": "^4.18.2" (examination-assignment-3-backend/package.json)

	Ditt Web Api ska kunna hämta och spara och uppdatera och ta bort (CRUD) produkter från din NoSQL databas som ska vara en Mongo DB (atlas).

		MongoDB URI: mongodb+srv://christianeri:TYqAdlJICxOZb6md@cluster0.kysgncj.mongodb.net/win22?retryWrites=true&w=majority

	  	GET endpoints:	      /					    	alla objekt i databasen
				      /tag/${tag}/${amount?}			objekt med angiven tag 
			 	      /category/${category}/${amount?}	    	objekt i angiven kategori
				      /rated/${rating}			        objekt med angivet ratingvärde 
				      /related/${category}/${articleNumber}	objekt i samma kategori som angiven produkt utom produkten med angivet artikelnummer 
			      	      /items/${amount}			        angivet antal slumpmässigt utvalda produktobjekt
				      /item/${articleNumber}			objekt med angivet artikelnummer


		  POST endpoint:	 /add	    	till exempel: 
		  					{"articleNumber": "12345", "name": "Test Product", "description": "", 
							"category": "Product object", "price": 55, "rating": 1, "imageName": "", "tag": "test" }
				       	
		  PUT endpoint:	 	/edit/${id}     till exempel: 
                                                    http://localhost:5000/api/inventoryitems/639e21fd38be540ef4efeb2c
							{ "category": "test products" }

		  DELETE endpoint: /remove/${articleNumber}       till exempel: http://localhost:5000/api/inventoryitems/remove/84769
      
