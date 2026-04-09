const mongoose = require('mongoose');
const ExpenseSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
            maxLength: 50
        },
        amount: {
            type: Number,
            required: true,
            trim: true,
            maxLength: 20,
        },
        type: {
            type: String,
            default: 'expense'
        },
        date: {
            type: Date,
            required: true,
            trim: true
        },
        category: {
            type: String,
            required: true,
            trim: true
        },
        description: {
            type: String,
            required: true,
            trim: true,
            maxLength: 20
        }
    }, { timestamps: true })

   module.exports=mongoose.model('Expense',ExpenseSchema)























/*NOTES
1) Each attribute (field) in the schema specifies the data type, validation rules, and other properties for the field.
2)type: String: The title field will store a string value. This could represent the title or name of the income source (e.g., "Salary", "Freelance Work").
required: true: This means that the title field is mandatory. Mongoose will throw a validation error if you try to save a document without this field.
trim: true: This option removes any leading or trailing whitespace from the title string before saving it to the database. For example, " Salary " would be trimmed to "Salary".
maxLength: 50: This sets the maximum length of the title string to 50 characters. If the string exceeds this length, a validation error will occur
3)timestamps: true: This option automatically adds two fields to the schema: createdAt and updatedAt.
createdAt: Stores the date and time when the document was first created.
updatedAt: Stores the date and time when the document was last updated.
These fields are automatically managed by Mongoose, meaning you don’t need to manually set or update them—they will be handled automatically during document creation and modification.
*/