import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js@2.10.0"

const supabaseUrl = 'https://skcaxupkxckvpbfxjzdw.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrY2F4dXBreGNrdnBiZnhqemR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc5Njg0NDYsImV4cCI6MTk5MzU0NDQ0Nn0.n1GPC3kyuzxl4Dxv1vj873QMafRkpLQ3dyKPGxChdog'
const supabase = createClient(supabaseUrl, supabaseKey)

async function getBooks() {
  let { data: Books, error } = await supabase
    .from('Books')
    .select('*')
  
  for (let book of Books) {
    let bookList = document.getElementById('books');
    bookList.innerHTML += `<tr class="text-center">
    <td class="border-4 border-black">${book.title}</td>
    <td class="border-4 border-black">${book.author}</td>
    <td class="border-4 border-black"><a href="https://www.google.com/search?q=${book.isbn}">${book.isbn}</td>
    <td class="border-4 border-black">${book.description}</td></tr>`
  }
  
}  

getBooks(); 