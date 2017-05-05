//Function to replace in a string
module.exports = function(str, obj, prefix, suffix)
{
  //Check the object
  if(typeof obj === 'undefined'){ return str; }

  //Check the prefix value
  if(typeof prefix !== 'string'){ var prefix = '{'; }

  //Check the suffix value
  if(typeof suffix !== 'string'){ var suffix = '}'; }

  //Iterate over all the keys
  Object.keys(obj).forEach(function(key)
	{
		//Get the value
    var value = obj[key];

    //Create the RegExp
    var exp = new RegExp(prefix + key + suffix, 'g');

    //Replace the value
    str = str.replace(exp, value);
	});

  //Return the string
  return str;
};
