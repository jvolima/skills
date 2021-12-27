import React, {useState} from 'react';
import { 
	View, 
	Text, 
	StyleSheet, 
	TextInput, 
	Platform,
	TouchableOpacity
} from "react-native";

export function Home() {
	const [newSkill, setNewSkill] = useState();
	const [mySkills, setMySkills] = useState([]);

	function handleAddNewSkill() {
		setMySkills(oldState => [...oldState, newSkill])
	}

	return (
		<View style={styles.container}>
				<Text style={styles.title}>
					Welcome, Joao
				</Text>

				<TextInput 
					style={styles.input}
					placeholder='New skill'
					placeholderTextColor= '#555'
					onChangeText={setNewSkill}
				/>

				<TouchableOpacity 
					style={styles.button}
					activeOpacity={.7}
					onPress={handleAddNewSkill}
				>
					<Text style={styles.buttonText}>Add</Text>
				</TouchableOpacity>

				<Text style={[styles.title, { marginVertical: 50 }]}>
					My Skills 
				</Text>

				{
					mySkills.map(skill => (
						<TouchableOpacity key={skill} style={styles.buttonSkill}>
							<Text style={styles.textSkill}>
								{skill}
							</Text>
						</TouchableOpacity>
					))
				}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#121015',
		paddingVertical: 70,
		paddingHorizontal: 30
	},
	title: {
		color: '#fff',
		fontSize: 22,
		fontWeight: 'bold'
	},
	input: {
		backgroundColor: '#1F1E25',
		color: '#fff',
		fontSize: 16,
		padding: Platform.OS === 'ios' ? 15 : 12,
		marginTop: 30,
		borderRadius: 7
	},
	button: {
		backgroundColor: '#A370F7',
		padding: 15,
		borderRadius: 7,
		alignItems: 'center',
		marginTop: 20
	},
	buttonText: {
		color: '#fff',
		fontSize: 15,
		fontWeight: 'bold',
	},
	buttonSkill: {
		backgroundColor: '#1F1E25',
		borderRadius: 50,
		padding: 15,
		alignItems: 'center',
		marginVertical: 10
	},
	textSkill: {
		color: '#fff',
		fontSize: 20,
		fontWeight: 'bold'
	}
})