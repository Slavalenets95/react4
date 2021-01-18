import React, {useState, useEffect} from 'react'
import { useFormContext } from 'react-hook-form';
import classes from './formTagList.module.scss'

let id = 10

const FormTagList = ({ tagList }) => {
   const { register } = useFormContext();
   const [tags, setTags] = useState([])

   const deleteTag = (id) => {
       const idx = tags.findIndex(item => item.id === id)
       setTags([...tags.slice(0, idx), ...tags.slice(idx + 1)])
   }

   const handleChange = (id, value) => {
       const idx = tags.findIndex(item => item.id === id)
       setTags([...tags.slice(0, idx), {...tags[idx], txt: value}, ...tags.slice(idx + 1)])
   }

   const addTag = (event, txt='') => {
       id += 1
       setTags([...tags, {id: [id], txt: txt}])
   }

   useEffect(() => {
       if(tagList) {
        const newTagList = tagList.map(item => ({id: id++, txt: item}))
        setTags(newTagList)
       }
   }, [])

   return (
   <div className={classes.wrapper}>
       <p className={classes.title}>Tags</p>
       <ul className={classes.tag_list}>
           {tags.map(item => {
               return (
                   <li key={item.id}>
                       <input className={classes.tag_checkbox} type="checkbox" name="tagList" value={item.txt} defaultChecked ref={register} />
                       <input className={classes.tag_input} type="text" defaultValue={item.txt} onChange={(event) => handleChange(item.id, event.target.value)} />
                       <button className={classes.delete_btn} type='button' onClick={() => deleteTag(item.id)}>Delete</button>
                   </li>
               )
           })}
           <button className={classes.add_btn} type='button' onClick={addTag}>Add tag</button>

       </ul>
   </div>
    )
}

export default FormTagList