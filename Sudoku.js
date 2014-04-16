//First creating a array so that the input can be put there
//It will be empty at first!

var user_input = new Array(81);

// We all know that in Sudoku, the numbers important for a certain number
// are the 8 other numbers inside the box and then two straight lines
// of number that include that number as shown in diagram below
//
//
// %%%|%%%|*%%
// ...|...|$aa
// ...|...|$aa
// -----------
// ...|...|$..
// ...|...|$..
// ...|...|$..
// -----------
// ...|...|$..
// ...|...|$..
// ...|...|$..

// TO solve * we only need to take input from numbers in %, * and a
// Same is true for every other element.
// Thus an element has 20 elements that are related to it

// Now let's make a function to map those 20 elements for each element
// The function will take the index of the element and then give out the index of it's family

var return_array = new Array(20);// As we need to return only 20 elements

function family(index)
{
	//"row" will give the row the number is in and "col" will give the column.
	var row = Math.floor((index)/9);
	var col = (index)%9;
	
	var coord = row.toString()+col.toString(); //String representation of the index in grid coordinates
	
	// temp row
	var temp_row = new Array(8);
	var cord1;
	var counter = 0;
	
	//now the straight line forming column that includes *
	//We do this by looping and getting all the co-ordinates of the family members and putting it in array temp_row. We don't put the element we got as index there.
	for (var i = 0; i<9;i++)
	{
		cord1 = i.toString()+col.toString();
		if(cord1 != coord)
		{
			temp_row[counter++] = cord1;
		}
	}
	
	//now for the straight line of numbers forming the row that includes *
	//temp cols
	var temp_cols= new Array(8);
	var counter = 0;
	for (var i = 0; i<9;i++)
	{
		cord1 = row.toString()+i.toString();
		if(cord1 != coord)
		{
			temp_cols[counter++] = cord1;
		}
	}
	//now for the member of it's group (the 4) that are not intersected by the lines