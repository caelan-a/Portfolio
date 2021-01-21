<form onSubmit={handleOnSubmit}>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    name="_replyto"
                    onChange={handleOnChange}
                    required
                    value={inputs.email}
                />
                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    name="message"
                    onChange={handleOnChange}
                    required
                    value={inputs.message}
                />
                <button type="submit" disabled={status.submitting}>
                    {!status.submitting
                        ? !status.submitted
                            ? 'Submit'
                            : 'Submitted'
                        : 'Submitting...'}
                </button>
            </form>
            {status.info.error && (
                <div className="error">Error: {status.info.msg}</div>
            )}
            {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}