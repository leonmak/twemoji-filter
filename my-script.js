var emojiUnicodeMap = require('./emoji-annotation-to-unicode');
var emojiNameCategory = require('./emoji-name-category');
require('shelljs/global');

emojiNameCategory.forEach(emojiNameCategoryObj => {
	// Get unicode of the emojis from selected emojis
	var unicode = emojiUnicodeMap[emojiNameCategoryObj.name];
	// Copy only selected emojis to release dir 
	cp(`svg/${unicode}.svg`, 'out');
});
