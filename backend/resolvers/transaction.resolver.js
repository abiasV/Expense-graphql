import Transaction from "../models/transaction.model.js";

const transactionResolver = {
	Query: {
		transactions: async (_,__,context) => {
			try {
				if(!context.getUser()) throw new Error("Unauthorized");
				const userId = await context.getUser()._id;
				const transactions = await Transaction.find({ userId }); // { userId: userId }
				return transactions;
			} catch (err) {
				console.error("Error in getting transactions:", err);
				throw new Error("Error getting transactions");
			}
		},
		transaction: async (_,{ transactionId },) => {
			try {
				const transaction = await Transaction.findById(transactionId);
				return transaction;
			} catch (err) {
				console.error("Error in getting transaction:", err);
				throw new Error("Error getting transaction");
			}
		},
		// TODO => ADD categoryStatistics query
	},
	Mutation: {
		createTransaction: async(_, {input}, context) => {
			try {
				const newTransaction = new Transaction({
					...input,
					userId: context.getUser()._id
				})
				await newTransaction.save();
				return newTransaction;
			} catch (err) {
				console.error("Error in creating transaction:", err);
				throw new Error("Error creating transaction");
			}
		},
		updateTransaction: async(_, {input}) => {
			try {
				const updateTransaction = await Transaction.findByIdAndUpdate(input.transactionId, input, {new:true});
				return updateTransaction;

			} catch (err) {
				console.error("Error in updating transaction:", err);
				throw new Error("Error updating transaction");
			}
		},
		deleteTransaction: async(_, {transactionId}) => {
			try {
				const deletedTransaction = await Transaction.findByIdAndDelete(transactionId);
				return deletedTransaction;
			} catch (err) {
				console.error("Error in deleting transaction:", err);
				throw new Error("Error deleting transaction");
			}
		},
	},
	// TODO => ADD TRANSACTION/USER RELATIONSHIP
};

export default transactionResolver;