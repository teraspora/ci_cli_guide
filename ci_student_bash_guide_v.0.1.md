<h1 id="guide-to-the-bash-cli-command-line-interface-for-student-software-developers">Guide to the Bash CLI (Command-Line Interface) for student software developers</h1>
<h2 id="introduction">Introduction</h2>
<p>Throughout your journey as a software developer, you will have to use the command line.   Sure, these days many code editors, cloud-based or not, have buttons you can click and icons you can drag to do many of the things that you&#39;ll need to do to create a simple web application and deploy it.   But once things start getting a little more complex, it becomes essential to be comfortable using the command line.</p>
<p>So exactly what are the command line, the CLI, Bash, the Terminal, the Linux shell?</p>
<p>Simply put, it&#39;s a way of telling the computer what to do by typing textual commands.   It&#39;s an application that runs on your computer, or in the cloud on a server, and gives you a window in which there&#39;s a prompt, for instance a <code>$</code> sign.   You type commands after the prompt, press <code>Enter</code> and the computer then runs the command and prints any output there may be.   A command you issue may for instance be an instruction to move or copy files, to create a directory (folder), to run a program, to edit afile, to change or query operating system information, to install applications or libraries, to check network status, to ask the time...</p>
<p>Commands begin with a keyword, and then a space.   Then you type any options and/or flags, separated by spaces.   Options are ususally just words or hyphenated words (like <code>install</code> or <code>full-upgrade</code>).   Flags can be single letters preceded by a dash/minus sign (like <code>-h</code>, or word-strings preceded by a double dash, (like <code>--almost-all</code>).</p>
<p>There&#39;s a handful of commands it pays to get familiar with.   And most commands accept a <code>-h</code> or <code>--help</code> flag which will print basic information about itself.   Sometimes it&#39;s not very helpful, though, and you&#39;ll want to use the <code>info</code> command or the <code>man</code> command (it stands for &quot;manual&quot;) to get more detailed information.   There are also many forums and other websites with tutorials, examples, testbeds, video lessons.   So if you want to find out about the <code>find</code> command, for example, you could type <code>info find</code> (press space to page down, <code>q</code> to quit displaying the man page).   And/or search the web for &quot;bash find&quot; and explore the results.</p>
<p>And there&#39;s a handful of very useful keyboard shortcuts it&#39;s worth getting to know.   We&#39;ll introduce these one by one as we go.</p>
<p>I assume you have a shell to play in, be it on your computer or in the cloud via a web interface.   Do type the commands as we go, don&#39;t copy and paste them.   Your fingers need to remember them!   So let&#39;s get going!</p>
<h2 id="moving-around-your-file-system">Moving around your file system</h2>
<p>Your files are stored in a hierarchical structure.   The file system has a <code>root</code> directory, denoted by a slash <code>/</code>, and within this, you as a user have a &quot;Home&quot; directory, so if your username is &quot;kermit&quot;, your &quot;Home&quot; directory will be <code>/home/kermit/</code>, and within this you&#39;ll create new folders for different projects, and folders within these - subdirectories - for different kinds of files or different sections of your projects.   The home directory is usually denoted by <code>~</code> for short.</p>
<p>We&#39;ll use the terms &quot;folder&quot; and &quot;directory&quot; interchangeably.   The <code>path</code> of a file or directory is the string of directories you need to traverse from the root to get to where that file or directory is. </p>
<p>Let&#39;s find out where we are!</p>
<pre><code class="lang-zsh"><span class="hljs-symbol">$</span> pwd
/home/john
<span class="hljs-symbol">$</span>
</code></pre>
<p><code>pwd</code> stands for &quot;Print working directory&quot;.   Whenever you&#39;re in the shell, you&#39;re someplace in the file system.   You can use <code>pwd</code> to find out where.   OK, let&#39;s create a folder for our project:</p>
<pre><code class="lang-zsh"><span class="hljs-symbol">$</span> pwd
/home/john
<span class="hljs-symbol">$</span> mkdir project_1
<span class="hljs-symbol">$</span> cd project_1/
<span class="hljs-symbol">$</span> pwd
/home/john/project_1
<span class="hljs-symbol">$</span>
</code></pre>
<p>OK, that&#39;s two new commands!</p>
<p><code>mkdir project_1</code> means &quot;Make a directory called <code>project_1</code> here in the current directory.&quot;  It will only print something is there&#39;s an error; if successful, it&#39;s silent.</p>
<p><code>cd project_1</code> means &quot;Change the current directory to <code>project_1</code>&quot;.</p>
<p>When you type <code>pwd</code> again, notice that the working, or current, directory has changed.</p>
<p><code>project_1</code> is a &quot;child&quot; directory of <code>~</code>.   <code>~</code> is the &quot;parent&quot; of <code>project_1</code>.</p>
<p>Let&#39;s go back up to the parent:</p>
<pre><code class="lang-zsh"><span class="hljs-symbol">$</span> cd ..
<span class="hljs-symbol">$</span> pwd
/home/john
<span class="hljs-symbol">$</span>
</code></pre>
<p><code>..</code> always denotes the parent of the current directory.   <code>.</code> denotes the current directory.</p>
<p>Now create another folder, a &quot;sibling&quot; of <code>project_1</code>, change to it, and create a file within it:</p>
<pre><code class="lang-zsh"><span class="hljs-variable">$ </span>mkdir project_2
<span class="hljs-variable">$ </span>cd project_2/
<span class="hljs-variable">$ </span>&gt;fred.txt
</code></pre>
<p>Typing <code>&gt;</code> and then a file name will create an empty file with that name.   Beware, though:  if a file exists with that name it&#39;s content will be destroyed!</p>
<p>Let&#39;s check it got created:</p>
<pre><code class="lang-zsh"><span class="hljs-symbol">$</span> ls
fred.txt
<span class="hljs-symbol">$</span>
</code></pre>
<p>We use <code>ls</code> to list directory contents.   But how can we list the contents of <code>project_1</code>, if we&#39;re in <code>project_2</code>?   Simple:  go to the parent first, then down into <code>project_1</code>:</p>
<pre><code class="lang-zsh"><span class="hljs-symbol">$</span> pwd
/home/john/project_2
<span class="hljs-symbol">$</span> ls ../project_1/
<span class="hljs-symbol">$</span>
</code></pre>
<p>Alternatively we could&#39;ve gone there:</p>
<pre><code class="lang-zsh"><span class="hljs-symbol">$</span> pwd
/home/john/project_2
<span class="hljs-symbol">$</span> cd ../project_1/
<span class="hljs-symbol">$</span> ls
<span class="hljs-symbol">$</span>
</code></pre>
<p>No output means there are no files or folders within <code>project_1</code>.</p>
<p>OK, at this stage we don&#39;t really need two project directories, so let&#39;s remove <code>project_2</code>.   We&#39;ll need to go up out of it, back to the parent, first:</p>
<pre><code class="lang-zsh"><span class="hljs-symbol">$</span> pwd
/home/john/project_2
<span class="hljs-symbol">$</span> cd ..
<span class="hljs-symbol">$</span> pwd
/home/john
<span class="hljs-symbol">$</span> rmdir project_2/
rmdir: failed to remove <span class="hljs-string">'project_2/'</span>: Directory <span class="hljs-keyword">not</span> empty
<span class="hljs-symbol">$</span>
</code></pre>
<p><code>rmdir</code> means &quot;Remove directory&quot;.   But it didn&#39;t work.   If you type <code>man rmdir</code>, you&#39;ll see why right at the top:</p>
<pre><code><span class="hljs-built_in">RMDIR</span>(<span class="hljs-number">1</span>)                                           User Commands                                           <span class="hljs-built_in">RMDIR</span>(<span class="hljs-number">1</span>)

NAME
       <span class="hljs-built_in">rmdir</span> - remove empty directories

SYNOPSIS
       <span class="hljs-built_in">rmdir</span> [OPTION]... DIRECTORY...

DESCRIPTION
       Remove the DIRECTORY(ies), <span class="hljs-keyword">if</span> they are empty.
</code></pre><p>Ok, so we need to remove <code>fred.txt</code> first.   But it&#39;s a file, not a folder, so we can&#39;t use <code>rmdir</code>.</p>
<pre><code class="lang-zsh"><span class="hljs-symbol">$</span> ls
fred.txt
<span class="hljs-symbol">$</span> <span class="hljs-symbol">$</span> rm project_2/fred.txt 
<span class="hljs-symbol">$</span> ls project_2/
<span class="hljs-symbol">$</span> rmdir project_2/
<span class="hljs-symbol">$</span>
</code></pre>
<p>Unsurprisingly, <code>rm</code> is used for removing files.   They don&#39;t have to be empty so take care what you remove!   </p>
<blockquote>
<p>Notice in the above example we used the same last option, the directory name <code>project_2/</code> in two consecutive commands.
There&#39;s a couple of shortcuts to save typing it twice (but they may not both work in all shall apps).
One is to press <code>Escape</code> and then <code>.</code>, and the other is to type <code>!$</code>.   Try them out!</p>
</blockquote>
<p>Instead you might want to move a file somewhere else.   Let&#39;s create a few files and folders inside <code>project_1</code>:</p>
<pre><code class="lang-zsh"><span class="hljs-symbol">$</span> pwd
/home/john/project_1
<span class="hljs-symbol">$</span> mkdir foo
<span class="hljs-symbol">$</span> mkdir bar
<span class="hljs-symbol">$</span> mkdir foo/cats
<span class="hljs-symbol">$</span> mkdir foo/dogs
<span class="hljs-symbol">$</span> &gt;foo/cats/lion.txt
<span class="hljs-symbol">$</span> &gt;foo/cats/tiger.txt
<span class="hljs-symbol">$</span> ls
bar  foo
<span class="hljs-symbol">$</span> ls foo
cats  dogs
<span class="hljs-symbol">$</span> ls foo/cats/
lion.txt  tiger.txt
<span class="hljs-symbol">$</span>
</code></pre>
<p>Let&#39;s write some text to <code>tiger.txt</code>.   First, we&#39;ll move into <code>foo/cats</code> so we don&#39;t have to use long paths:</p>
<pre><code class="lang-zsh"><span class="hljs-symbol">$</span> cd foo/cats
<span class="hljs-symbol">$</span> echo <span class="hljs-string">"Tiger, tiger burning bright"</span> &gt; tiger.txt 
<span class="hljs-symbol">$</span> cat tiger.txt
Tiger, tiger burning bright
<span class="hljs-symbol">$</span>
</code></pre>
<p>Two new commands:
<code>cat</code> outputs the contents of a text file to the terminal.
<code>echo</code> copies the quoted text on the left of the <code>&gt;</code> to the file on the right.   If the file doesn&#39;t exist, it&#39;ll be created.   If it does exist, it&#39;ll be overwritten.   To append text at the end of the file, after the existing content, use <code>&gt;&gt;</code> instead of <code>&gt;</code>:</p>
<pre><code class="lang-zsh">$ echo <span class="hljs-string">"Some text"</span> &gt; tiger<span class="hljs-selector-class">.txt</span> 
$ cat tiger<span class="hljs-selector-class">.txt</span>
Some text
$ echo <span class="hljs-string">"Another line of text"</span> &gt;&gt; tiger<span class="hljs-selector-class">.txt</span> 
$ cat tiger<span class="hljs-selector-class">.txt</span>
Some text
Another line of text
$
</code></pre>
