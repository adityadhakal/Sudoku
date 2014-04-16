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
	
	//Now for the 'a' numbers in the grid.
	//we can get the numbers back by throwing all the stuff and checking if the already exists
	// first find in which box the input lies
	// into boxes of 3 cols and 3 rows
	
	var row_position;
	var col_position;
	
	//Finding the row position
	if(row<3)
	{
		row_position = 1;
	}
	if(row<6 && row>=3)
	{
		row_position = 2;
	}
	if(row>6)
	{
		row_position = 3;
	}
	
	//Finding the column position
	if(col<3)
	{
		col_position = 1;	
	}
	
	if(col<6 && col>=3)
	{
		col_position = 2;
	}
	if(col>6)
	{
		col_position = 3;
	}
	//now the row and columns are found..
	//like below
	
	// 11|12|13
	// --------
	// 21|22|23
	// --------
	// 31|32|33
	
	// 11 includes 00,01,02,....,10,11,12,....,20,21,22
	// 12 includes 03,04,05,....,13,14,15,....,23,24,25
	// and so on
	
	var position_box = row_position.toString()+col_position.toString();// the box the input is in
	
	var temp_rest = new Array(4);// we will store the numbers in same box in this array
	
	//demiliting array
	var row_left;
	var row_right;
	var col_top;
	var col_bottom;
	
	//for all boxes
	switch(position_box)
	{
		case "11":
			row_left = 0;
			row_right = 2;
			col_top = 0;
			col_bottom = 2;
			break;
		case "12":
			row_left = 3;
			row_right = 5;
			col_top = 0;
			col_bottom = 2;
			break;
		case "13":
			row_left = 6;
			row_right = 8;
			col_top = 0;
			col_bottom = 2;
			break;
		case "21":
			row_left = 0;
			row_right = 2;
			col_top = 3;
			col_bottom = 5;
			break;
		case "22":
			row_left = 3;
			row_right = 5;
			col_top = 3;
			col_bottom = 5;
			break;
		case "23":
			row_left = 6;
			row_right = 8;
			col_top = 3;
			col_bottom = 5;
			break;
		case "31":
			row_left = 0;
			row_right = 2;
			col_top = 6;
			col_bottom = 8;
			break;
		case "32":
			row_left = 3;
			row_right = 5;
			col_top = 6;
			col_bottom = 8;
			break;
		case "33":
			row_left = 6;
			row_right = 8;
			col_top = 6;
			col_bottom = 8;
			break;
		default:
			document.write("Some Error in dividing into groups");
	}
	
		//Now putting stuff in the array
		counter = 0;
		for(var i = row_left; i<=row_right;i++)
		{
			for(var j = col_top; j<=col_bottom;j++)
			{
				if(i != row && j != col)//Filtering the data so we only send the 4 needed
				{
					temp_rest[counter++] = i.toString()+j.toString();
				}
			}
		}
		
		//Now concatenating all 20 family members of the index we sent
		
		var return_array = temp_row.concat(temp_cols,temp_rest);
		
		return return_array;
}